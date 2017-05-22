import { combineReducers } from 'redux-immutable';
import { createForms } from 'react-redux-form/immutable';

import { label as dataSourceLabel } from '../../data_sources/factory';
import { activeSource } from '../selectors/data';

import app from './app.js';
import forms, { slugify as slugifyForm } from './forms.js';
import passive_tree from './passive_tree.js';
import data from './data.js';
import db from './db.js';
import nav_tabs from './nav_tabs.js';
import poe from './poe.js';
import routing from './routing';
import rows from './rows.js';
import heatmap from './heatmap.js';
import tooltip from './tooltip.js';
import zoom from './zoom.js';

/**
 * @param {List} task_state returnval from {getTaskState}
 * @return {string[]} array of string representations of all tasks
 */
export const getRunningTasks = (task_state) => {
  return task_state
    .filter(([, running]) => running)
    .map(([task]) => task);
};

/**
 * generates a meaningful filename for the current heatmap
 * @param {ReduxState} state
 * @return {string}
 */
export function heatmapLabel(state) {
  return [
    dataSourceLabel(activeSource(state.get('data'))),
    slugifyForm(state.get('data_filter')),
  ].join('-');
}

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
  routing,
  ...createForms(forms),
});

export default treeStatsApp;
