import {SELECT_ROWS, UPDATE_ROWS} from '../actions/rows';
import {CALCULATE_HEATMAP_DATA} from '../actions/heatmap';

const initial = {
    rows: [],
    fetching: false,
    dirty: false,
};

const rows = (state = initial, action) => {
    switch (action.type) {
    case UPDATE_ROWS:
        return {
            ...state,
            rows: action.payload.rows,
            dirty: true,
            fetching: false,
        };
    case SELECT_ROWS:
        return {
            ...state,
            fetching: true,
        };
    case CALCULATE_HEATMAP_DATA:
        return {
            ...state,
            dirty: false,
        };
    default:
        return state;
    };
};

export default rows;
