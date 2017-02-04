import {CALCULATE_HEATMAP_DATA} from '../actions/heatmap_data';

const initial = {
    data: [],
    max: 0,
    hash: null,
};

const heatmap_data = function(state = initial, action) {
    switch (action.type) {
    case CALCULATE_HEATMAP_DATA:
        return action.payload.heatmap_data;
    default:
        return state;
    }
};

export default heatmap_data;
