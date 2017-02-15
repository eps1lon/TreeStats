const Nedb = require('nedb');

export const AWAITING_ROWS = 'AWAITING_ROWS'; // step 1
export const INSERT_ROWS = 'INSERT_ROWS'; // step 2
export const SET_DB = 'SET_DB'; // step 3

/**
 * creates a new db and inserts the rows
 * @param {Promise} rows json representing a table
 * @return {Promise} the {Nedb}
 */
export function insertRows(rows) {
  return (dispatch) => {
    dispatch({ type: AWAITING_ROWS });

    return rows.then((rows) => {
      return new Promise((fulfill, reject) => {
        const db = new Nedb();

        dispatch({
          type: INSERT_ROWS,
        });

        db.insert(rows, (e) => {
          if (e) reject(e);
          else fulfill(db);
        });
      });
    }).then((db) => {
      return dispatch({
        type: SET_DB,
        payload: { db },
      });
    });
  };
}
