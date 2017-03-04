const nodeAsync = require('async');
const request = require('request');
const path = require('path');
const fs = require('fs');
const log4js = require('log4js');
const csv = require('csv');

const POE = require('../src/poe/data.js');

const TreeUrl = require('../src/poe/PassiveTreeUrl');

const tree_ident = POE.current_tree;

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
 * generates the url for the ggg ladder api
 * see https://www.pathofexile.com/developer/docs/api-resource-ladders
 *
 * @param {string} league
 * @param {number} offset
 * @param {number} limit
 * @return {string}
 */
const ladderApi = (league, offset, limit) => {
  return `http://api.pathofexile.com/ladders/${league}?offset=${offset}&limit=${limit}&track=true`;
};


/**
 * partial inverse to ladderApi
 * @param {number} api_url
 * @return {string}
 */
const ladderApiToLeague = (api_url) => {
  return decodeURIComponent(
    api_url.match(
      /http:\/\/api.pathofexile.com\/ladders\/([^?]+)\?.*/)[1]);
};

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
 * generates the filename for the csv output
 * @param {string} root
 * @param {number} now
 * @return {*}
 */
const outFilename = (root, now) => {
  // adjust gitignore accordingly
  return path.join(root, `${now}_${tree_ident}_get_trees.csv`);
};

/**
 * extracts the creation date from a filename which
 * should be a js Date at the start of the basename
 * @param {string} filename
 * @return {number}
 */
const ctimeOutFile = (filename) => {
  const match = new RegExp(`^([^_]+)_${tree_ident}_get_trees\.csv$`)
    .exec(path.basename(filename));
  return match ? +match[1] : Number.NEGATIVE_INFINITY;
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
  const klass = classes.get(data.character.class);
  const tree_url = TreeUrl.encode(
    POE.trees.get(POE.current_tree).version,
    klass.character_class,
    klass.ascendancy,
    data.nodes || []
  );

  return {
    id: data.character.id,
    last_active: data.last_active,
    league: leagues.get(data.league),
    xp: data.character.experience,
    class: klass.id,
    dead: data.dead,
    // on 10k passives we are saving around 2MB by encoding the nodes
    // (4.8MB down to 2.6MB)
    nodes: tree_url,
    challenges: data.account.challenges.total,
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
let entries = new Map();

// passives_url => character id
let passives_urls_characters = new Map();

// w/o array.fill it results in empty values
// create the ladder urls for each league and flatten it into one array
const ladder_urls
  = [].concat(...Array.from(leagues.keys()).map((league) =>
    new Array(total / ladder_limit).fill(0)
      .map((_, offset) =>
        ladderApi(league, offset * ladder_limit, ladder_limit))
  ));

logger.info(
  `fetching total of ${ladder_urls.length}`
  + ` ladders over ${leagues.size} leagues`
);

fs.exists(latest, (exists) => {
  let old_trees = new Map();

  if (exists) {
    fs.createReadStream(latest).pipe(csv.parse({
      delimiter: ',',
      columns: true,
    }, (e, data) => {
      if (!e) {
        old_trees = new Map(data.map((entry) => {
          return [entry.id, entry];
        }));
      }

      oldTreesComplete(old_trees);
    }));
  } else {
    oldTreesComplete(old_trees);
  }
});

const ladderComplete = (results, old_trees) => {
  logger.info(`finished ladder fetch after ${runtime()}ms`);

  // flattened passive urls
  const passives_urls = [].concat(...results.map((l) => {
    // parse the body and map on every entry its passives url
    const body = JSON.parse(l.body);

    const league = ladderApiToLeague(l.request.href);

    if (!body.entries) {
      logger.warn('no entries', l.request.href, body);
      return false;
    }

    return body.entries.map((e) => {
      const passive_url
        = passivesApi(e['character'].name, e['account'].name);
      const id = e['character'].id;
      const old_entry = old_trees.get(id);

      // save the entry
      entries.set(id, Object.assign(e, {
        league: league,
        last_active:
        ladderActive(old_entry, e) ? start : old_entry.last_active,
      }));
      // and a reverse mapping so we can get the entry via url
      passives_urls_characters.set(passive_url, e['character'].id);

      return passive_url;
    });
  })).filter((u) => u);

  // logger.info(passives_urls)

  logger.info(`fetching ${passives_urls.length} passives`);

  // progress bar
  let progress = 0; // number of urls fetched
  const in_steps = passives_urls.length / 10 | 0; // every ~10%

  nodeAsync.mapLimit(passives_urls, async_limit, (url, callback) => {
    // just a wrapper that updates the progress
    request(url, null, (err, transformed) => {
      progress++;

      if (progress % in_steps == 0) {
        logger.info(
          `finished`
          + `${(100 * progress / passives_urls.length).toFixed(2)}%`);
      }

      if (err) {
        logger.warn(err);
      }
      callback(null, transformed);
    }).on('error', (e) => logger.warn(e));
  }, (err, results) => {
    if (err) {
      logger.warn(err);
    } else {
      passivesComplete(results);
    }
  });
};

const passivesComplete = (results) => {
  logger.info(
    `finished passive fetch after ${runtime()}ms`
    + `(${runtime() / results.length}ms/passive)`);

  let trees = [];

  for (let result of results) {
    const passive_url = result.request.href;
    let passives = undefined;

    try {
      passives = JSON.parse(result.body);
    } catch (e) {
      logger.warn(`bad request for ${passive_url}`);
      continue;
    }


    if (passives) {
      const nodes = passives['hashes'];

      const entry
        = entries.get(passives_urls_characters.get(passive_url));

      // logger.debug(passive_url, entry)

      trees.push(Object.assign({
        nodes: nodes,
      }, entry));
    } else {
      // FIXME first breach result returns false but browser is ok
      logger.debug(passive_url);
    }
  }

  taskComplete(trees);
};

const taskComplete = (trees) => {
  logger.info(`finished task in ${(runtime() / 1000).toFixed(2)}s`);

  csv.transform(trees, csvTransform).pipe(csv.stringify({
    header: true,
  })).pipe(fs.createWriteStream(out_filename));
};

const oldTreesComplete = (old_trees) => {
  // ggg has a rate ladder_limit so fuck me right
  nodeAsync.mapLimit(ladder_urls, api_rate_limit, request, (e, results) => {
    if (e) {
      logger.warn(e);
    } else {
      ladderComplete(results, old_trees);
    }
  });
};
