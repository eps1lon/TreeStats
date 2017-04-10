import { zoomIdentity } from 'd3-zoom';
import { Map } from 'immutable';

import { transformToImmutable } from '../../d3_util';
import { ZOOMED, RESET_ZOOM, COMMAND_EXECUTED } from '../actions/zoom';
import { RESET_ZOOM as COMMAND_RESET_ZOOM } from '../components/Zoomable.jsx';

const initial = Map({
  transform: transformToImmutable(zoomIdentity),
  command: undefined,
});

const zoom = (state = initial, action) => {
  switch (action.type) {
    case ZOOMED:
      return state.set(
        'transform',
        transformToImmutable(action.payload.transform),
      );
    case RESET_ZOOM:
      return state.withMutations((state) => {
        state.set('command', COMMAND_RESET_ZOOM);
        state.set('transform', transformToImmutable(zoomIdentity));
      });
    case COMMAND_EXECUTED:
      return state.set('command', undefined);
    default:
      return state;
  }
};

export default zoom;
