import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';

import { SET_DB } from '../actions/db';
import { updateRows } from '../actions/rows';
import { formModelChanged } from '../helpers/rrf';

/*
 * rows are derived from the db and the data_filter
 * TODO throttle change events
 */
export const cacheRows = (action$) => {
  return action$.filter((action) => {
    return action.type == SET_DB
      || formModelChanged(action, 'data_filter');
  }).mapTo(updateRows());
};
