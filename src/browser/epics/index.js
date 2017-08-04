import { combineEpics } from 'redux-observable';

import { getSourcesIndex, setSourcesIndex } from './data';
import { heatmapCache } from './heatmap';
import { fetchTree, matchTreeToData } from './passive_tree';
import { availableLeagues } from './poe';
import { cacheRows } from './rows';
import { syncZoom } from './zoom';

const root_epic = combineEpics(
  availableLeagues,
  getSourcesIndex,
  setSourcesIndex,
  cacheRows,
  heatmapCache,
  fetchTree,
  matchTreeToData,
  syncZoom,
  // TODO disabled routing display
  // sourceInLocation,
);

export default root_epic;
