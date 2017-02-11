const current_tree = require('../../current_tree.js');

const passive_tree = (state = current_tree, action) => {
  return state;
};

export default passive_tree;
