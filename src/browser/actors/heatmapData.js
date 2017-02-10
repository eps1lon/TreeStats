import {calculateHeatmap} from '../actions/heatmap';
import {initial_tree_conf} from '../reducers/forms';

import objectEquals from '../../objectsEqual';

let old_tree_conf = initial_tree_conf;

/**
 * @param {Object} tree_conf
 * @return {Object} the properties that are relevant for the data
 */
function dataRelevantConf(tree_conf) {
    return {
        group_orbits: tree_conf.get('group_orbits'),
        start: tree_conf.get('start'),
        scionPathOf: tree_conf.get('scionPathOf'),
        ascendancy: tree_conf.get('ascendancy'),
        mastery: tree_conf.get('mastery'),
    };
}

/**
 * checks if the tree conf or rows change
 * and dispatches the update of the heatmap data
 * @param {Map} state
 * @param {function} dispatch
 */
export function heatmapDataActor(state, dispatch) {
    const rows = state.get('rows');
    const passive_tree_conf = state.get('passive_tree_conf');

    const some_dirty = [
        rows.get('dirty'),
        !objectEquals(
            dataRelevantConf(old_tree_conf),
            dataRelevantConf(passive_tree_conf)
        ),
    ].some((dirty) => dirty);

    if (some_dirty) {
        console.log('heatmap should update');
        old_tree_conf = passive_tree_conf;
        dispatch(calculateHeatmap(state));
    }
};
