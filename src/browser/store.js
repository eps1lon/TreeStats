import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import treeStatsApp from './reducers';
import {rowsActor} from './actors/rows';
import {heatmapDataActor} from './actors/heatmapData';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        // collapse react-redux-form
        collapsed: (getState, action) => action.type.startsWith('rrf/'),
    });
    //middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

const store = createStore(
    treeStatsApp,
    middleware,
);

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
