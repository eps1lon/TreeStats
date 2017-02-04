import {zoomIdentity} from 'd3-zoom';

import {ZOOMED} from '../actions/zoom';

const zoom = (state = zoomIdentity, action) => {
    switch (action.type) {
    case ZOOMED:
        return action.payload.transform;
    default:
        return state;
    }
};

export default zoom;
