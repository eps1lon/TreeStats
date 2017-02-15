import { List, Map } from 'immutable';
import { SELECT_ROWS, UPDATE_ROWS } from '../actions/rows';
import { CALCULATE_HEATMAP_DATA } from '../actions/heatmap';

const initial = Map({
  rows: List(),
  selecting: false,
  dirty: false,
});

const rows = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_ROWS:
      return state.withMutations((state) => {
        state.set('rows', List(action.payload.rows));
        state.set('dirty', true);
        state.set('selecting', false);
      });
    case SELECT_ROWS:
      return state.set('selecting', true);
    case CALCULATE_HEATMAP_DATA:
      return state.set('dirty', false);
    default:
      return state;
  };
};

export default rows;
