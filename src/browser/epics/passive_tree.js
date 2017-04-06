import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

import { SET_ACTIVE, getSourceByKey } from '../actions/data';
import {
  FETCH_TREE,
  newTree,
  fetchTree as fetchTreeAction,
} from '../actions/passive_tree';

const poe = require('../../poe/data');

export const treeJsonUrl = (id) => {
  return `trees/${id}.json`;
};

export const fetchTree = (action$, store) => {
  return action$
    .ofType(FETCH_TREE)
    .filter((action) => {
      const old_id = store.getState().get('passive_tree').id;
      const new_id = action.payload.id;

      // only fetch a new one if either we currently have the initial tree
      // or if we got a new fetchable tree
      return old_id === undefined
        || (old_id !== new_id && new_id !== undefined);
    })
    .mergeMap((action) => {
      const tree_id = action.payload.id || poe.current_tree;
      return ajax.getJSON(treeJsonUrl(tree_id))
        .map((tree_data) => newTree(tree_data, tree_id));
    });
};

export const matchTreeToData = (action$, store) => {
  return action$
    .ofType(SET_ACTIVE)
    .map((action) => {
      const source = getSourceByKey(store.getState(), action.payload.active);
      return fetchTreeAction(source.tree_ident);
    });
};
