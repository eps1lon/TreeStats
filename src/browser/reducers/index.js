import { combineReducers } from 'redux-immutable';
import { createForms } from 'react-redux-form/immutable';

import { List } from 'immutable';

import app from './app.js';
import forms from './forms.js';
import passive_tree from './passive_tree.js';
import data from './data.js';
import db, { STATE as DB_STATE } from './db.js';
import nav_tabs from './nav_tabs.js';
import poe from './poe.js';
import rows from './rows.js';
import heatmap, { STATE as HEATMAP_STATE } from './heatmap.js';
import tooltip from './tooltip.js';
import zoom from './zoom.js';

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

/**
 * @param {List} task_state returnval from {getTaskState}
 * @return {string[]} array of string representations of all tasks
 */
export const getRunningTasks = (task_state) => {
  return task_state
    .filter(([, running]) => running)
    .map(([task]) => task);
};


const treeStatsApp = combineReducers({
  app,
  db, // redux (dev tools and state-invariant have problems with Nedb it seems
  rows,
  heatmap,
  nav_tabs,
  passive_tree,
  poe,
  tooltip,
  zoom,
  data,
  ...createForms(forms),
});

export default treeStatsApp;
