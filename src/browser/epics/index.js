import { combineEpics } from 'redux-observable';

import { getSourcesIndex, setSourcesIndex } from './data';
import { heatmapCache } from './heatmap';
import { fetchTree, matchTreeToData } from './passive_tree';
import { cacheRows } from './rows';
import { syncZoom } from './zoom';

const root_epic = combineEpics(
  getSourcesIndex,
  setSourcesIndex,
  cacheRows,
  heatmapCache,
  fetchTree,
  matchTreeToData,
  syncZoom,
);

export default root_epic;
