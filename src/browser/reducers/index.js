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
import heatmap from './heatmap.js';
import tooltip from './tooltip.js';
import zoom from './zoom.js';

/**
 * @param {Object} state redux state of the app
 * @return {Map} task_ident => running?
 */
export const getTaskState = (state) => {
  return List.of(
    ['source index', state.getIn(['data', 'loading'])],
    ['source content', state.getIn(['db', 'state']) == DB_STATE.AWAITING_ROWS],
    ['preparing db', state.getIn(['db', 'state']) == DB_STATE.INSERT_ROWS],
    // when they are done the heatmap actor immediately fires
    // calculate heatmap data which in sync calculates data
    // so it doesnt make sense to add another indicator since the
    // main thread will be busy
    ['crunching numbers', state.getIn(['rows', 'selecting'])],
  );
};

/**
 * @param {Object} state redux state of the app
 * @return {string[]} array of string representations of all tasks
 */
export const getRunningTasks = (state) => {
  return getTaskState(state)
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
