import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import treeStatsApp from './reducers';
import {rowsActor} from './actors/rows';
import {heatmapDataActor} from './actors/heatmapData';

const initial = {
    nav_tabs: {
        conf: 'data_filter', // show data filter initially
    },
};

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== `production` && false) {
    const logger = createLogger({
        // collapse react-redux-form
        collapsed: (getState, action) => action.type.startsWith('rrf/'),
    });
    middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

const store = createStore(
    treeStatsApp,
    initial,
    middleware,
);

/*
 * actor pattern
 */
let acting = false;
const actors = [
    rowsActor,
    heatmapDataActor,
];

store.subscribe(function() {
    if (!acting) {
        acting = true;

        for (const actor of actors) {
            actor(store.getState(), store.dispatch);
        }

        acting = false;
    }
});

export default store;
