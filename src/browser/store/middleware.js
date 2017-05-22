import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import logger from './logger';
import root_epic from '../epics';

const epic_middleware = createEpicMiddleware(root_epic);

const middlewares = [
  thunkMiddleware,
  epic_middleware,
  routerMiddleware(browserHistory),
];

if (process.env.NODE_ENV !== `production`) {
  middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default middleware;
