/** ********************/
/** ********************/
/** ****LEGACY*****/
/** working scripts ****/
/** located in *********/
/** scripts/ ***********/
// //////////////////////


const fs = require('fs');
const path = require('path');
const csvParse = require('csv-parse/lib/sync');

const PassiveTree = require('../src/poe/PassiveTree');
const PassiveTreeAllocation = require('../src/poe/PassiveTreeAllocation');
const POE = require('../src/poe/data');

// shim object entries for PassiveTree
const entries = require('object.entries');
entries.shim();

// due to incompatibility with node and import we mimic a csv data source

// relative to src/task/
const filename = path.join(process.cwd(), process.argv[2]);

const [, tree_ident]
  = path.basename(filename).match(/^\d+_([^_]*)_get_trees.csv$/);

const tree_data = require(`../src/poe/trees/${tree_ident}/tree`);
const tree = new PassiveTree(tree_data.passiveSkillTreeData, tree_ident);

const file = fs.readFileSync(filename);

const rows = csvParse(file, {
  auto_parse: true,
  columns: true,
  delimiter: ',',
});

/**
 * sometimes the ladder displays different classes than the profile
 * the old get_trees task took
 *
 * @param {Object[]} rows
 * @param {PassiveTree} tree
 * @param {Object} POE data
 * @return {Object[]} fixed rows
 */
function fixInconsistentClasses(rows, tree, POE) {
  let changed_rows = 0;

  return rows.map((row, i) => {
    let ladder_class = POE.classes.get(row.class);

    const passives = PassiveTreeAllocation.fromUrl(row.nodes, tree);
    const ascendancy = passives.ascendancyFromNodes();
    const starting_class = passives.startingClassFromNodes();

    if (!passives.isValid()) {
      if (ascendancy === undefined || starting_class === undefined) {
        console.log(ladder_class, ascendancy);
        console.log(ladder_class, starting_class);
        console.log(row.league, row.xp);
        --changed_rows;
      }

      let new_class_id = row.class;
      let new_ascendancy = ladder_class.ascendancy;
      if (ascendancy !== undefined) {
        new_class_id
          = POE.classes.findKey((klass) => klass.name === ascendancy.name);
        new_ascendancy = ascendancy.ascendancy;
      }

      let new_starting_class = ladder_class.character_class;
      if (starting_class !== undefined) {
        new_starting_class = starting_class.character_class;
      }

      // console.log(ladder_class);
      // console.log(new_class_id, new_ascendancy, new_starting_class);

      passives.starting_class = new_starting_class;
      passives.ascendancy = new_ascendancy;

      row.class = new_class_id;
      row.nodes = passives.toString();

      console.log('changed rows', ++changed_rows);
    }

    return row;
  });
}

fixInconsistentClasses(rows, tree, POE);

// TODO write back, batch
