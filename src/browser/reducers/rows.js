import { List, Map } from 'immutable';
import { SELECT_ROWS, UPDATE_ROWS } from '../actions/rows';

const initial = Map({
  rows: List(),
  selecting: false,
});

const rows = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_ROWS:
      return state.withMutations((state) => {
        state.set('rows', List(action.payload.rows));
        state.set('selecting', false);
      });
    case SELECT_ROWS:
      return state.set('selecting', true);
    default:
      return state;
  };
};

export default rows;
