import {Map} from 'immutable';
const Nedb = require('nedb');

import {CSV_TO_DB, INSERT_ROWS, PARSE_CSV, SET_DB} from '../actions/db';
import {SELECT_ROWS} from '../actions/rows';

const initial = Map({
  db: new Nedb(),
  // new db has been written
  dirty: false,
  // new db is currently fetched
  // includes fetch
  fetching: false,
  // rows are parsed
  parsing: false,
  // rows are inserted
  inserting: false,
});

const db = (state = initial, action) => {
  switch (action.type) {
  case SET_DB:
    return state
      .set('db', action.payload.db)
      .set('dirty', true)
      .set('inserting', false);
  case CSV_TO_DB:
    return state.set('fetching', true);
  case PARSE_CSV:
    return state
      .set('fetching', false)
      .set('parsing', true);
  case INSERT_ROWS:
    return state
      .set('parsing', false)
      .set('inserting', true);
  case SELECT_ROWS:
    return state.set('dirty', false);
  default:
    return state;
  };
};

export default db;
