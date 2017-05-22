import { combineEpics } from 'redux-observable';

import { getSourcesIndex, setSourcesIndex, sourceInLocation } from './data';
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
  sourceInLocation,
);

export default root_epic;
