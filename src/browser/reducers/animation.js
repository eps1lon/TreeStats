import { List, Map } from 'immutable';

const initial = Map({
  heatmaps: List(),
  playing: false,
});

const animation = (state = initial) => {
  return state;
};

export default animation;
