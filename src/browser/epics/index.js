import { combineEpics } from 'redux-observable';

import { getSourcesIndex, setSourcesIndex } from './data';
import { cacheRows } from './rows';

const root_epic = combineEpics(
  getSourcesIndex,
  setSourcesIndex,
  cacheRows,
);

export default root_epic;
