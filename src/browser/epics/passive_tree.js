import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

import { FETCH_TREE, newTree } from '../actions/passive_tree';

export const treeJsonUrl = (id) => {
  return `trees/${id}.json`;
};

export const fetchTree = (action$) => {
  return action$.ofType(FETCH_TREE)
    .mergeMap((action) => {
      const tree_id = action.payload.id;
      return ajax.getJSON(treeJsonUrl(tree_id))
        .map((tree_data) => newTree(tree_data, tree_id));
    });
};
