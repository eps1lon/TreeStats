import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/takeUntil';

import {
  PLAY, PAUSE,
  stepForward, pause,
} from '../actions/heatmap_history';
import { ACTIVATE } from '../actions/nav_tabs';
import { getCurrentHeatmap, FRAME_CHANGERS } from '../reducers/heatmap_history';

export const animate = (action$) => {
  return action$.ofType(PLAY)
    .mergeMap(() => {
      return interval(1000)
        .mapTo(stepForward())
        .takeUntil(action$.ofType(PAUSE));
    });
};

export const timeTravelHistory = (action$, store) => {
  return action$.ofType(...FRAME_CHANGERS)
    .map(() => {
      const state = store.getState().get('heatmap_history');
      return getCurrentHeatmap(state);
    });
};

export const interrupt_play_actions = [ACTIVATE];

export const interruptPlay = (action$) => {
  return action$.ofType(...interrupt_play_actions)
    .mapTo(pause());
};
