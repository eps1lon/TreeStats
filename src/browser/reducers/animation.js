import { List, Map } from 'immutable';
import {
  ADD,
} from '../actions/animation';

const initial = Map({
  heatmaps: List(),
  playing: false,
});

const animation = (state = initial, action) => {
  switch(action.type) {
    case ADD:
      return state.update(
        'heatmaps',
        (heatmaps) => heatmaps.push(action.payload.src),
      );
    default:
      return state;
  }
};

export default animation;
