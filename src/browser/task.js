import { List } from 'immutable';

import { STATE as HEATMAP_STATE } from './reducers/heatmap.js';
import { STATE as DB_STATE } from './reducers/db.js';

/**
 * @param {Object} state redux state of the app
 * @return {Map} task_ident => running?
 */
export const getTaskState = (state) => {
  return List.of(
    [
      'source index',
      state.getIn(['data', 'loading']),
    ],
    [
      'source content',
      state.getIn(['db', 'state']) == DB_STATE.AWAITING_ROWS,
    ],
    [
      'preparing db',
      state.getIn(['db', 'state']) == DB_STATE.INSERT_ROWS,
    ],
    [
      'filtering character',
      state.getIn(['rows', 'selecting'])],
    [
      'crunching numbers',
      state.getIn(['heatmap', 'state']) == HEATMAP_STATE.CALCULATING,
    ],
  );
};

export const progress = (task_state) => {
  const first_running = task_state.findIndex(([, running]) => running);

  if (first_running === -1) {
    return 1;
  }

  return first_running / task_state.size;
};
