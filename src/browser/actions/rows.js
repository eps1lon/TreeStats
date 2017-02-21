export const SELECT_ANY = 'ROWS/SELECT_ANY';

// action types
export const UPDATE_ROWS = 'ROWS/UPDATE';
export const SELECT_ROWS = 'ROWS/SELECT';

/**
 * promises exec of a data cursor with the data filter applied
 * @param {Nedb} db
 * @param {Object} data_filter
 * @return {Promise} the {Object[]} rows
 */
function selectRows(db, data_filter) {
  const last_active = data_filter.get('last_active');
  const league = data_filter.get('league');
  const klass = data_filter.get('klass');

  const filter = {
    last_active: {
      $gte: new Date(last_active).valueOf(),
    },
  };

  if (league != SELECT_ANY) {
    filter.league = +league;
  }

  if (klass != SELECT_ANY) {
    filter.class = +klass;
  }

  return new Promise((fulfill) => {
    db.find(filter)
      .sort({ xp: -1 })
      .limit(+data_filter.limit)
      .skip(+data_filter.offset)
      .exec((e, rows) => {
        if (e) reject(e);
        else fulfill(rows);
      });
  });
};

/**
 * updates the rows from the current store and data_filter state
 * @return {function} redux-thunk
 */
export function updateRows() {
  return (dispatch, getState) => {
    const state = getState();
    const db = state.get('db');
    const data_filter = state.get('data_filter');

    dispatch({
      type: SELECT_ROWS,
    });

    return selectRows(db.get('db'), data_filter).then((rows) => {
      dispatch({
        type: UPDATE_ROWS,
        payload: { rows },
      });
    });
  };
};
