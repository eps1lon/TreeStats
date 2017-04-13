import { List, Map } from 'immutable';

import { add as groupAdd } from '../helpers/abelGroup';
import {
  ADD, CLEAR,
  STEP_BACKWARD, STEP_FORWARD,
} from '../actions/animation';

const initial = Map({
  heatmaps: List(),
  playing: false,
  current_frame: 0,
});

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
      );
    case STEP_BACKWARD:
      return state.update(
        'current_frame',
        (frame) => groupAdd(frame, state.get('heatmaps').size, -1),
      );
    case STEP_FORWARD:
      return state.update(
        'current_frame',
        (frame) => groupAdd(frame, state.get('heatmaps').size, +1),
      );
    default:
      return state;
  }
};

export default animation;
