import { List, Map } from 'immutable';

import { add as groupAdd } from '../helpers/abelGroup';
import {
  ADD, CLEAR,
  STEP_BACKWARD, STEP_FORWARD, FAST_BACKWARD, FAST_FORWARD, PLAY, PAUSE,
} from '../actions/heatmap_history';

const initial = Map({
  history: List(), // list of dispatchable actions
  playing: false,
  current_frame: 0,
});

// actions that change the current_frame
// use in e.g. epics
export const FRAME_CHANGERS = [
  STEP_BACKWARD, STEP_FORWARD,
  FAST_BACKWARD, FAST_FORWARD,
];

/**
 * selector for the current heatmap
 * @param {Map} state
 * @return {String} for img src attr
 */
export function getCurrentHeatmap(state) {
  return state.get('history').get(state.get('current_frame'));
};

const heatmap_history = (state = initial, action) => {
  switch(action.type) {
    case ADD:
      return state.update(
        'history',
        (history) => history.push(action.payload),
      );
    case CLEAR:
      return state.update(
        'history',
        (history) => history.clear(),
      ).set('current_frame', 0);
    case STEP_BACKWARD:
      return state.withMutations((state) => {
        state.update(
          'current_frame',
          (frame) => groupAdd(frame, state.get('history').size, -1),
        );
      });
    case STEP_FORWARD:
      return state.withMutations((state) => {
        state.update(
          'current_frame',
          (frame) => groupAdd(frame, state.get('history').size, +1),
        );
      });
    case FAST_BACKWARD:
      return state.withMutations((state) => {
        state.set('current_frame', 0);
      });
    case FAST_FORWARD:
      return state.withMutations((state) => {
        state.set('current_frame', state.get('history').size - 1);
      });
    case PLAY:
      return state.set('playing', true);
    case PAUSE:
      return state.set('playing', false);
    default:
      return state;
  }
};

export default heatmap_history;
