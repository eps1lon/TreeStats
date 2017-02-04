const Nedb = require('nedb');
import csvParse from 'csv-parse';

// csv to db process
// step 1-3 exist to update on progress
export const CSV_TO_DB = 'CSV_TO_DB'; // step 1
export const PARSE_CSV = 'PARSE_CSV'; // step 2
export const INSERT_ROWS = 'INSERT_ROWS'; // step 3
export const SET_DB = 'SET_DB'; // step 4

/**
 * @param {string} body the csv body from fetch.text()
 * @return {Promise} the csv rows as json
 */
function parseCsv(body) {
    return new Promise((fulfill) => {
        csvParse(body, {
            auto_parse: true,
            columns: true,
            delimiter: ',',
        }, (e, rows) => {
            if (e) reject(e);
            fulfill(rows);
        });
    });
}

/**
 * creates a new db and inserts the rows
 * @param {Object[]} rows json representing a table
 * @return {Promise} the {Nedb}
 */
function rowsToDb(rows) {
    return new Promise((fulfill, reject) => {
        const db = new Nedb();

        db.insert(rows, (e) => {
            if (e) reject(e);
            else fulfill(db);
        });
    });
}

/**
 * @param {string} filename the url to the csv doc
 * @return {function} redux-thunk
 */
export function csvToDb(filename) {
    return (dispatch) => {
        dispatch({
            type: CSV_TO_DB,
            filename: filename,
        });

        return fetch(filename)
            .then((response) => response.text())
            .then((body) => {
                dispatch({
                    type: PARSE_CSV,
                });
                return parseCsv(body);
            })
            .then((rows) => {
                dispatch({
                    type: INSERT_ROWS,
                });
                return rowsToDb(rows);
            })
            .then((db) => {
                return dispatch({
                    type: SET_DB,
                    payload: {db},
                });
            });
    };
};
