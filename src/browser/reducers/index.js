import {combineReducers} from 'redux';
import {createForms} from 'react-redux-form';

import app from './app.js';
import forms from './forms.js';
import passive_tree from './passive_tree.js';
import db from './db.js';
import nav_tabs from './nav_tabs.js';
import poe from './poe.js';
import rows from './rows.js';
import heatmap from './heatmap.js';
import tooltip from './tooltip.js';
import zoom from './zoom.js';

const treeStatsApp = combineReducers({
    app,
    db,
    rows,
    heatmap,
    nav_tabs,
    passive_tree,
    poe,
    tooltip,
    zoom,
    ...createForms(forms),
});

export default treeStatsApp;
