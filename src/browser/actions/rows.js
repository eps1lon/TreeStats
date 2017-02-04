export const SELECT_ANY = 'SELECT_ANY';

// action types
export const UPDATE_ROWS = 'UPDATE_ROWS';
export const SELECT_ROWS = 'SELECT_ROWS';

/**
 * promises exec of a data cursor with the data filter applied
 * @param {Nedb} db
 * @param {Object} data_filter
 * @return {Promise} the {Object[]} rows
 */
function selectRows(db, data_filter) {
    const {last_active, league, klass} = data_filter;

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
            .sort({xp: -1})
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
        const {db, data_filter} = getState();

        dispatch({
            type: SELECT_ROWS,
        });

        return selectRows(db.db, data_filter).then((rows) => {
            dispatch({
                type: UPDATE_ROWS,
                payload: {rows},
            });
        });
    };
};
