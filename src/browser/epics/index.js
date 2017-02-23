import { combineEpics } from 'redux-observable';

import { getSourcesIndex, setSourcesIndex } from './data';
import { heatmapCache } from './heatmap';
import { fetchTree } from './passive_tree';
import { cacheRows } from './rows';

const root_epic = combineEpics(
  getSourcesIndex,
  setSourcesIndex,
  cacheRows,
  heatmapCache,
  fetchTree,
);

export default root_epic;
