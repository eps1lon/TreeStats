import { createStore } from 'redux';

import treeStatsApp from '../reducers';
import enhancer from './enhancer';

const store = createStore(
  treeStatsApp,
  enhancer,
);

export default store;
