import {CALCULATE_HEATMAP_DATA, EXTREMA_CHANGE} from '../actions/heatmap';

const initial = {
    data: [],
    max: 0,
    hash: null,
    legend: {
        min: 0,
        max: 0,
        gradient: {},
    },
};

const heatmap = function(state = initial, action) {
    switch (action.type) {
    case CALCULATE_HEATMAP_DATA:
        return {
            ...state,
            ...action.payload.heatmap_data,
        };
    case EXTREMA_CHANGE:
        return {
            ...state,
            legend: action.payload.legend,
        };
    default:
        return state;
    }
};

export default heatmap;
