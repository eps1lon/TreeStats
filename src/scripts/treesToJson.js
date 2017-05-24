import * as fs from 'fs';
import * as path from 'path';
import * as data from '../poe/data';

/*
 * creates a json file from the ggg passive tree js file
 * to async load the tree in the TreeStatsApp
 */

const jsonFile = (id) => path.join(__dirname, `../public/trees/${id}.json`);

console.log(__dirname);

const trees = data.trees;

for (const id of trees.keys()) {
  const tree = require(`../poe/trees/${id}/tree`);

  fs.writeFile(
    jsonFile(id),
    JSON.stringify(tree),
    'utf8',
    (e) => {
      if (e) throw e;
      console.log(`written ${id}`);
    }
  );
}
