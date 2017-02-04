import {zoomIdentity} from 'd3-zoom';

import {ZOOMED, RESET_ZOOM} from '../actions/zoom';

const zoom = (state = zoomIdentity, action) => {
    switch (action.type) {
    case ZOOMED:
        return action.payload.transform;
    case RESET_ZOOM:
        return zoomIdentity;
    default:
        return state;
    }
};

export default zoom;
