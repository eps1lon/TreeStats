const request = require('request');
const path = require('path');
const fs = require('fs');
const log4js = require('log4js');
const csv = require('csv');
const decompress = require('decompress');

const { ctimeOutFile, filename } = require('./lib/treesToCsvFile');

const POE = require('../src/poe/data.js');
const TreeUrl = require('../src/poe/PassiveTreeUrl');

const tree_ident = POE.current_tree;
const outFilename = (root, now) => filename(root, now, tree_ident);

// create some lookup tables for leagues, classes etc
const leagues = new Map();
for (let [league_id, league] of POE.leagues) {
  if (league.active) {
    leagues.set(league.name, league_id);
  }
}
const classes = new Map();
for (let [class_id, klass] of POE.classes) {
  classes.set(klass.name, Object.assign({
    id: class_id,
  }, klass));
}

// passive fetches = |leagues| * total
let [total, async_limit, ladder_limit, api_rate_limit] = process.argv.slice(2);
// boundaries set by ggg api
total = Math.min(15000, Math.max(1, total || 0));
ladder_limit = Math.min(200, Math.max(1, ladder_limit || 200));
// number of simultaneous async calls
async_limit
  = Math.min(Number.POSITIVE_INFINITY, Math.max(1, async_limit || 500));
// number of maximum calls to ggg api (this should be small
api_rate_limit
  = Math.min(Number.POSITIVE_INFINITY, Math.max(1, api_rate_limit || 5));

// cut of remainder
total -= total % ladder_limit;

const start = Date.now();

const root_path = __dirname;
const data_path = path.join(root_path, '/get_trees');

const log_filename = path.join(root_path, `log/get_trees_log`);

log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: log_filename },
  ],
});

const logger = log4js.getLogger();
logger.setLevel('INFO');

/**
 * generates the url to display all used passives
 *
 * @param {string} character
 * @param {string} account
 * @return {string}
 */
const passivesApi = (character, account) => {
  return `https://www.pathofexile.com/character-window/get-passive-skills?character=${character}&accountName=${account}`;
};

/**
 * creates an object which maps the json data generated in this script
 * to a non nested map
 *
 * @param {Object} data
 * @return {{id, last_active: (*|number), league: (string|*),
 * xp: *, class: (*|string), dead: *,
 * nodes: (*|Array|nodes|ny|Map), challenges: *}}
 */
const csvTransform = (data) => {
  if (data === undefined || Object.keys(data).length === 0) {
    return {};
  }

  const klass = classes.get(data.class);

  const tree_url = TreeUrl.encode(
    POE.trees.get(POE.current_tree).version,
    klass.character_class,
    klass.ascendancy,
    data.nodes || []
  );

  return {
    id: data.id,
    last_active: data.last_active,
    league: leagues.get(data.ladder),
    xp: data.experience,
    class: klass.id,
    dead: data.dead,
    // on 10k passives we are saving around 2MB by encoding the nodes
    // (4.8MB down to 2.6MB)
    nodes: tree_url,
    challenges: data.challenges,
  };
};

/**
 * checks if the new_entry was active since old_entry
 *
 * @param {Object} old_entry_csv
 * @param {Object} new_entry_api
 * @return {boolean}
 */
const ladderActive = (old_entry_csv, new_entry_api) => {
  if (!old_entry_csv) {
    return true;
  }

  const new_entry_csv = csvTransform(new_entry_api);

  return old_entry_csv.xp != new_entry_csv.xp
    || old_entry_csv.dead != new_entry_csv.dead;
};

const runtime = (() => {
  logger.info(`started task with `
    + `--total=${total} `
    + `--limit=${ladder_limit} `
    + `--async_limit=${async_limit} `
    + `--api_rate_limit=${api_rate_limit}`);

  return () => Date.now() - start;
})();

const out_filename = outFilename(data_path, start);
const out_stream = fs.createWriteStream(out_filename);

// get the last out
const latest = path.join(data_path,
  fs.readdirSync(data_path).reduce((latest, file) => {
    if (ctimeOutFile(latest) < ctimeOutFile(file)) {
      return file;
    }
    return latest;
  }, outFilename(data_path, Number.NEGATIVE_INFINITY)));

logger.info(`fetching total of ${total} in chunks of ${async_limit}`);

// apparently there can exist name collisions with accounts
// so the get-passive-skills prob only returns the current character
// while the ladders api may return deleted chars
// this means that we will assign new passives to deleted chars
// if another one was created
// character id => ladder entry

const saveTree = ((stream) => (entry) => {
  if (entry !== null && typeof entry === 'object' && entry.nodes) {
    csv.transform([entry], csvTransform)
      .pipe(csv.stringify({
        header: false,
      }))
      .on('data', (data) => {
        stream.write(data);
      });
  }
})(out_stream);

const fetchPassive = (entry) => {
  return new Promise((resolve, reject) => {
    request(
      passivesApi(entry.name, entry.account),
      (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          const passive_url = response.request.href;
          let passives;

          try {
            passives = JSON.parse(body);
          } catch (e) {
            logger.warn(`fetchPassive: bad request for ${passive_url}`);
          }

          if (passives) {
            resolve(Object.assign(entry, { nodes: passives.hashes }));
          } else {
            logger.debug(passive_url);
            resolve(resolve(entry));
          }
        }
      }
    );
  });
};

const createTreeFile = (out_stream, cols) => {
  return new Promise((resolve, reject) => {
    csv.transform([], csvTransform).pipe(csv.stringify({
      columns: cols,
      header: true,
    }))
    .on('data', (data) => out_stream.write(data, null, resolve));
  });
};

const old_trees = new Promise((resolve, reject) => {
  if (fs.existsSync(latest)) {
    fs.createReadStream(latest).pipe(csv.parse({
      delimiter: ',',
      columns: true,
    }, (e, data) => {
      if (e) {
        reject(e);
      } else {
        resolve(new Map(data.map((entry) => {
          return [entry.id, entry];
        })));
      }
    }));
  } else {
    resolve(old_trees);
  }
});

const fetchLadder = () => {
  return new Promise((resolve, reject) => {
    request.get('http://pathofstats.com/poeapi/ladder', {
      encoding: null,
    }, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
};

const ladder = async () => {
  const body = await fetchLadder();

  const [zipfile] = await decompress(body);
  const decoded = zipfile.data.toString('utf8');
  const json = JSON.parse(decoded);

  return json;
};

Promise.all([old_trees, ladder()]).then(async ([old_trees, { entries }]) => {
  await createTreeFile(out_stream, Object.keys( {
    id: 1,
    last_active: 1,
    league: 1,
    xp: 1,
    class: 1,
    dead: 1,
    nodes: 1,
    challenges: 1,
  }));

  logger.info(
    `fetched api with ${entries.length} entries`
  );

  for (let i = 0; i < entries.length; i += async_limit) {
    const with_passives =
      entries.slice(i, i + async_limit)
      .filter((entry) => {
        return entry.rank <= total;
      })
      .map((entry) => {
        const id = entry.id;
        const old_entry = old_trees.get(id);

        return fetchPassive(Object.assign(entry, {
          last_active:
            ladderActive(old_entry, entry) ? start : old_entry.last_active,
        })).catch((e) => logger.warn('caught fetchPassive:', e));
      });

    with_passives.forEach(async (entry) => saveTree(await entry));

    await Promise.all(with_passives);
  }

  logger.info(`finished task in ${(runtime() / 1000).toFixed(2)}s`);
});
