import { List, Map } from 'immutable';

import { add as groupAdd } from '../helpers/abelGroup';
import {
  ADD, CLEAR,
  STEP_BACKWARD, STEP_FORWARD, FAST_BACKWARD, FAST_FORWARD, PLAY, PAUSE,
} from '../actions/animation';

const initial = Map({
  heatmaps: List(),
  hidden: true,
  playing: false,
  current_frame: 0,
});

/**
 * selector for the current heatmap
 * @param {Map} state
 * @return {String} for img src attr
 */
export function getCurrentHeatmap(state) {
  return state.get('heatmaps').get(state.get('current_frame'));
};

const animation = (state = initial, action) => {
  switch(action.type) {
    case ADD:
      return state.update(
        'heatmaps',
        (heatmaps) => heatmaps.push(action.payload.src),
      );
    case CLEAR:
      return state.update(
        'heatmaps',
        (heatmaps) => heatmaps.clear(),
      ).set('current_frame', 0);
    case STEP_BACKWARD:
      return state.withMutations((state) => {
        state.update(
          'current_frame',
          (frame) => groupAdd(frame, state.get('heatmaps').size, -1),
        );
        state.set('hidden', false);
      });
    case STEP_FORWARD:
      return state.withMutations((state) => {
        state.update(
          'current_frame',
          (frame) => groupAdd(frame, state.get('heatmaps').size, +1),
        );
        state.set('hidden', false);
      });
    case FAST_BACKWARD:
      return state.withMutations((state) => {
        state.set('current_frame', 0);
        state.set('hidden', false);
      });
    case FAST_FORWARD:
      return state.withMutations((state) => {
        state.set('current_frame', state.get('heatmaps').size - 1);
        state.set('hidden', false);
      });
    case PLAY:
      return state.set('playing', true);
    case PAUSE:
      return state.set('playing', false);
    default:
      return state;
  }
};

export default animation;
