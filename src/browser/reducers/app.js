import {zoomIdentity} from 'd3-zoom';

import {ZOOM_APP} from '../actions/app';

const initial = {
    zoom: zoomIdentity,
    width: 1900,
    height: 1700,
};

const zoom = (state = initial, action) => {
    switch (action.type) {
    case ZOOM_APP:
        return {
            ...state,
            zoom: action.payload.transform,
        };
    default:
        return state;
    }
};

export default zoom;
