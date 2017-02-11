import { combineReducers } from 'redux-immutable';
import { createForms } from 'react-redux-form/immutable';

import app from './app.js';
import forms from './forms.js';
import passive_tree from './passive_tree.js';
import data from './data.js';
import db from './db.js';
import nav_tabs from './nav_tabs.js';
import poe from './poe.js';
import rows from './rows.js';
import heatmap from './heatmap.js';
import tooltip from './tooltip.js';
import zoom from './zoom.js';

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
