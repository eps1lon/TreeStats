import { combineEpics } from 'redux-observable';

import { getSourcesIndex, setSourcesIndex } from './data';
import { heatmapCache } from './heatmap';
import { cacheRows } from './rows';

const root_epic = combineEpics(
  getSourcesIndex,
  setSourcesIndex,
  cacheRows,
  heatmapCache,
);

export default root_epic;
