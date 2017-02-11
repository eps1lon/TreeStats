const PassiveTree = require('./poe/PassiveTree');
const POE = require('./poe/data');
const tree_data = require(`./tree/${POE.current_tree}/tree`);

module.exports = new PassiveTree(
  tree_data.passiveSkillTreeData,
  POE.current_tree,
);
