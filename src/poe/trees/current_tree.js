const PassiveTree = require('../PassiveTree');
const POE = require('../data');
const tree_data = require(`./${POE.current_tree}/tree`);

module.exports = new PassiveTree(
  tree_data.passiveSkillTreeData,
  POE.current_tree,
);
