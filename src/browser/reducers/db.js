import { Map } from 'immutable';
const Nedb = require('nedb');

import { AWAITING_ROWS, INSERT_ROWS, SET_DB } from '../actions/db';
import { SELECT_ROWS } from '../actions/rows';

// states of the db
export const STATE = {
  EMPTY: 'DB/EMPTY',
  AWAITING_ROWS,
  INSERT_ROWS,
  READY: 'DB/READY',
};

const initial = Map({
  db: new Nedb(),
  state: STATE.EMPTY,
  // new db has been written
  dirty: false,
});

const db = (state = initial, action) => {
  switch (action.type) {
    case AWAITING_ROWS:
      return state.set('state', STATE.AWAITING_ROWS);
    case INSERT_ROWS:
      return state.set('state', STATE.INSERT_ROWS);
    case SET_DB:
      return state.withMutations((state) => {
        state.set('db', action.payload.db);
        state.set('dirty', true);
        state.set('state', STATE.READY);
      });
    case SELECT_ROWS:
      return state.set('dirty', false);
    default:
      return state;
  };
};

export default db;
