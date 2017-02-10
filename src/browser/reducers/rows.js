import {List, Map} from 'immutable';
import {SELECT_ROWS, UPDATE_ROWS} from '../actions/rows';
import {CALCULATE_HEATMAP_DATA} from '../actions/heatmap';

const initial = Map({
  rows: List(),
  fetching: false,
  dirty: false,
});

const rows = (state = initial, action) => {
  switch (action.type) {
  case UPDATE_ROWS:
    return state
      .set('rows', List(action.payload.rows))
      .set('dirty', true)
      .set('fetching', false);
  case SELECT_ROWS:
    return state.set('fetching', true);
  case CALCULATE_HEATMAP_DATA:
    return state.set('dirty', false);
  default:
    return state;
  };
};

export default rows;
