import { Map } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import treeStatsApp from './reducers';
import { rowsActor } from './actors/rows';
import { heatmapDataActor } from './actors/heatmapData';

const preload = Map({
  nav_tabs: Map({
    conf: 'data_filter', // show data source initially
  }),
});

const middlewares = [thunkMiddleware];

const verbose_actions = ['TOOLTIP'];

if (process.env.NODE_ENV !== `production` && true) {
  const logger = createLogger({
    // collapse all
    collapsed: true,
    // TOOLTIPs fire on mousemove
    predicate: (getState, action) =>
      !new RegExp(verbose_actions.join('|')).test(action.type),
  });
  middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

// @see {https://github.com/zalmoxisus/redux-devtools-extension}
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options
      actionsBlacklist: verbose_actions,
    }) : compose;

const enhancer = composeEnhancers(
  middleware,
  // additional enhancer
);

const store = createStore(
  treeStatsApp,
  preload,
  enhancer,
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
