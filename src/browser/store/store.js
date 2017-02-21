import { createStore } from 'redux';

import treeStatsApp from '../reducers';
import preload from './preload';
import enhancer from './enhancer';

const store = createStore(
  treeStatsApp,
  preload,
  enhancer,
);

export default store;
