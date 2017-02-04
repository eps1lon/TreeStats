import {combineReducers} from 'redux';
import {createForms} from 'react-redux-form';

import forms from './forms.js';
import passive_tree from './passive_tree.js';
import db from './db.js';
import rows from './rows.js';
import heatmap_data from './heatmap_data.js';

const treeStatsApp = combineReducers({
    db,
    rows,
    heatmap_data,
    passive_tree,
    ...createForms(forms),
});

export default treeStatsApp;
