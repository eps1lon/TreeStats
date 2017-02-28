import testFormatWith from './testFormat';
const POE = require('../../data');
const current_tree_data = require(`../${POE.current_tree}/tree`);

describe('ggg', function() {
  testFormatWith(current_tree_data.passiveSkillTreeData);
});
