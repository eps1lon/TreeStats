import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/takeUntil';

import { PLAY, PAUSE, stepForward } from '../actions/animation';

export const animate = (action$) => {
  return action$.ofType(PLAY)
    .mergeMap(() => {
      return interval(500)
        .mapTo(stepForward())
        .takeUntil(action$.ofType(PAUSE));
    });
};
