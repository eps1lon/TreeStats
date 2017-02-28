import PassiveTree from '../../poe/PassiveTree';

import { NEW_TREE } from '../actions/passive_tree';

const initial_state = new PassiveTree({
    nodes: [],
    groups: [],
});

const passive_tree = (state = initial_state, action) => {
  switch (action.type) {
    case NEW_TREE:
      return new PassiveTree(action.payload.data, action.payload.id);
    default:
      return state;
  }
};

export default passive_tree;
