import {Map} from 'immutable';
const Nedb = require('nedb');

import {INSERT_ROWS, SET_DB} from '../actions/db';
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
    return state.withMutations((state) => {
      state.set('db', action.payload.db);
      state.set('dirty', true);
      state.set('inserting', false);
    });
  case INSERT_ROWS:
    return state.withMutations((state) => {
      state.set('parsing', false);
      state.set('inserting', true);
    });
  case SELECT_ROWS:
    return state.set('dirty', false);
  default:
    return state;
  };
};

export default db;
