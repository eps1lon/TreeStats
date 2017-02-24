import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { NEW_TREE } from '../actions/passive_tree';
import { UPDATE_ROWS } from '../actions/rows';
import {
  calculateHeatmapFromState,
  HEATMAP_RELEVANT_CONF,
} from '../actions/heatmap';
import { formModelChanged } from '../helpers/rrf';

// calculateHeatmap when rows change
// or any for the calculation relevant conf in a rrf model
// TODO
// currently racing with fetchTree. every UPDATE_ROWS before NEW_TREE
// doesnt have an effect. thinking about something like
// filter(...).bufferUntilThenDontBufferAnymore(action$.ofType(NEW_TREE)).map...
export const heatmapCache = (action$, store) => {
  return action$.ofType(NEW_TREE)
    .mergeMap(
      () => action$.filter((action) => {
        return action.type === UPDATE_ROWS
          || (formModelChanged(action, 'passive_tree_conf')
              && HEATMAP_RELEVANT_CONF.includes(action.model));
      }),
      () => calculateHeatmapFromState(store.getState()),
    );
};
