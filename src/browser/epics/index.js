import { combineEpics } from 'redux-observable';

import { animate, interruptPlay, timeTravelHistory } from './heatmap_history';
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
  animate,
  interruptPlay,
  timeTravelHistory,
);

export default root_epic;
