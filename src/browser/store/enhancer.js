import { compose } from 'redux';
import { autoRehydrate } from 'redux-persist-immutable';

import { verbose_actions } from './logger';
import middleware from './middleware';

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
  autoRehydrate({ log: true }),
);

export default enhancer;
