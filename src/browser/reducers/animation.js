import { List, Map } from 'immutable';
import {
  ADD, CLEAR,
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
    default:
      return state;
  }
};

export default animation;
