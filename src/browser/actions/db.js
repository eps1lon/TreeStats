const Nedb = require('nedb');

// csv to db process
// step 1-3 exist to update on progress
export const INSERT_ROWS = 'INSERT_ROWS'; // step 3
export const SET_DB = 'SET_DB'; // step 4

/**
 * creates a new db and inserts the rows
 * @param {Promise} rows json representing a table
 * @return {Promise} the {Nedb}
 */
export function insertRows(rows) {
  return (dispatch) => {
    dispatch({
      type: INSERT_ROWS,
    });

    return rows.then((rows) => {
      return new Promise((fulfill, reject) => {
        const db = new Nedb();

        db.insert(rows, (e) => {
          if (e) reject(e);
          else fulfill(db);
        });
      });
    }).then((db) => {
      return dispatch({
        type: SET_DB,
        payload: {db},
      });
    });
  };
}
