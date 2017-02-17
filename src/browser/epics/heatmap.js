import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { UPDATE_ROWS } from '../actions/rows';
import {
  calculateHeatmapFromState,
  HEATMAP_RELEVANT_CONF,
} from '../actions/heatmap';
import { formModelChanged } from '../helpers/rrf';

// calculateHeatmap when rows change
// or any for the calculation relevant conf in a rrf model
export const heatmapCache = (action$, store) => {
  return action$.filter((action) => {
    return action.type === UPDATE_ROWS
      || (formModelChanged(action, 'passive_tree_conf')
          && HEATMAP_RELEVANT_CONF.includes(action.model));
  }).map(() => calculateHeatmapFromState(store.getState()));
};
