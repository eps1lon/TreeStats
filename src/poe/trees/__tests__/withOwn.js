import testFormatWith from './testFormat';
const POE = require('../../data');
const current_tree_data
  = require(`../../../../public/trees/${POE.current_tree}.json`);

describe('ggg', function() {
  testFormatWith(current_tree_data.passiveSkillTreeData);
});
