const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { ArgumentParser } = require('argparse');

const writeFile = promisify(fs.writeFile);

const { move } = require('./lib/util');
const Page = require('../src/remote/RemotePage');

const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse example',
});

parser.addArgument(['-p', '--prefix'], {
  defaultValue: 'default',
  help: 'prefix for screenshot files',
});

parser.addArgument(['-b', '--blacklist-file'], {
  help: 'prefix for screenshot files',
});

parser.addArgument(['-l', '--league'], {
  defaultValue: 'ROWS/SELECT_ANY',
  help: 'valueOf availableLeagues',
});

parser.addArgument(['-u', '--url'], {
  defaultValue: 'http://localhost:3000/',
  help: 'root url to TreeStats',
});


const { blacklist_file, league, prefix, url } = parser.parseArgs();

let blacklist = [];
let saveBlacklist = async () => undefined;

if (typeof blacklist_file === 'string') {
  if (fs.existsSync(blacklist_file)) {
    blacklist = JSON.parse(fs.readFileSync(blacklist_file));
  }

  saveBlacklist = async (blacklist) => {
    return await writeFile(blacklist_file, JSON.stringify(blacklist));
  };
}

const page = new Page(url).gotoMain();

page.availableSources()
  .then(async (sources) => {
    return {
      leagues: await page.availableLeagues(),
      sources,
    };
  })
  .then(async ({ leagues, sources }) => {
    // loop through these sequentiel because we are working on the same session.
    for (const source of sources) {
      if (blacklist.includes(source)) {
        console.log(`skipped ${source}`);
        continue;
      }

      await page.loadSource(source);
      await page.filterLeague(league);

      const file = await page.screenshot();

      console.log(`took ${source} ${league}`);

      const dest = path.join(
        __dirname,
        'screenshot',
        [prefix, source, league.replace('/', '-')].join('-') + '.png',
      );

      await move(file, dest);

      blacklist.push(source);
      await saveBlacklist(blacklist);
    }

    return true;
  })
  .then(async () => {
    // end will always throw atm
    page.end().catch((e) => {
      console.log('still throwing');
    }).then(() => {
      console.log('finish');
    });
  });
