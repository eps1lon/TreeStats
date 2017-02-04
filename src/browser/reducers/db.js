const Nedb = require('nedb');

import {CSV_TO_DB, INSERT_ROWS, PARSE_CSV, SET_DB} from '../actions/db';
import {SELECT_ROWS} from '../actions/rows';

const initial = {
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
};

const db = (state = initial, action) => {
    switch (action.type) {
    case SET_DB:
        return {
            ...state,
            db: action.payload.db,
            dirty: true,
            inserting: false,
        };
    case CSV_TO_DB:
        return {
            ...state,
            fetching: true,
        };
    case PARSE_CSV:
        return {
            ...state,
            fetching: false,
            parsing: true,
        };
    case INSERT_ROWS:
        return {
            ...state,
            parsing: false,
            inserting: true,
        };
    case SELECT_ROWS:
        return {
            ...state,
            dirty: false,
        };
    default:
        return state;
    };
};

export default db;
