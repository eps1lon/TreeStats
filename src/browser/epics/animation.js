import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/takeUntil';

import { PLAY, PAUSE, stepForward, pause } from '../actions/animation';
import { ACTIVATE } from '../actions/nav_tabs';

export const animate = (action$) => {
  return action$.ofType(PLAY)
    .mergeMap(() => {
      return interval(500)
        .mapTo(stepForward())
        .takeUntil(action$.ofType(PAUSE));
    });
};

export const interrupt_play_actions = [ACTIVATE];

export const interruptPlay = (action$) => {
  return action$.ofType(...interrupt_play_actions)
    .mapTo(pause());
};
