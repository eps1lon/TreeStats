import { zoomIdentity } from 'd3-zoom';

import { transformToImmutable } from '../../d3-transform-immutable';
import { ZOOMED, RESET_ZOOM } from '../actions/zoom';

const initial = transformToImmutable(zoomIdentity);

const zoom = (state = initial, action) => {
  switch (action.type) {
    case ZOOMED:
      return transformToImmutable(action.payload.transform);
    case RESET_ZOOM:
      return initial;
    default:
      return state;
  }
};

export default zoom;
