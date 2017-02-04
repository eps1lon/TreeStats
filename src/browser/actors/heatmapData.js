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
        group_orbits: tree_conf.group_orbits,
        start: tree_conf.start,
        scionPathOf: tree_conf.scionPathOf,
        ascendancy: tree_conf.ascendancy,
        mastery: tree_conf.mastery,
    };
}

/**
 * checks if the tree conf or rows change
 * and dispatches the update of the heatmap data
 * @param {Object} state
 * @param {function} dispatch
 */
export function heatmapDataActor(state, dispatch) {
    const {rows, passive_tree_conf} = state;

    const some_dirty = [
        rows.dirty,
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
