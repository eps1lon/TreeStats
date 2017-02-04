import {updateRows} from '../actions/rows';
import {initial_data_filter} from '../reducers/forms';

import objectEquals from '../../objectsEqual';

let old_data_filter = initial_data_filter;

/**
 * checks if the data filter or data store change
 * and dispatches the update of the rows cache
 * @param {Object} state
 * @param {function} dispatch
 */
export function rowsActor(state, dispatch) {
    const {db, data_filter} = state;

    const some_dirty = [
        db.dirty,
        !objectEquals(
            old_data_filter,
            data_filter,
        ),
    ].some((dirty) => dirty);

    if (some_dirty) {
        console.log('rows should update');
        old_data_filter = data_filter;
        dispatch(updateRows());
    }
};
