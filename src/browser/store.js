import { Map } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import treeStatsApp from './reducers';
import root_epic from './epics';

import { ZOOMED } from './actions/zoom';
import { SHOW_TOOLTIP } from './actions/tooltip';

const preload = Map({
  nav_tabs: Map({
    conf: 'data_filter', // show data source initially
  }),
});

const verbose_actions = [
  ZOOMED, SHOW_TOOLTIP,
];

const epic_middleware = createEpicMiddleware(root_epic);
const middlewares = [
  thunkMiddleware,
  epic_middleware,
];

if (process.env.NODE_ENV !== `production` && true) {
  const logger = createLogger({
    // collapse all
    collapsed: true,
    // TOOLTIPs fire on mousemove
    predicate: (getState, action) => !verbose_actions.includes(action.type),
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

export default store;
