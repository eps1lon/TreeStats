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

// because in between the epics trigger we dont have a running task
// and the system thinks we are ready. so we need to keep track where
// our progress was previously
let old_progress = 1;

export const progress = (task_state) => {
  const first_running = task_state.findIndex(([, running]) => running);

  // last step before finished
  const final_progress = (task_state.size - 1) / task_state.size;

  let progress = 1;

  if (first_running !== -1) {
    progress = first_running / task_state.size;
  } else if (old_progress < final_progress) {
    progress = old_progress;
  }

  old_progress = progress;

  return progress;
};
