import {Map} from 'immutable';
import {SHOW_TOOLTIP} from '../actions/tooltip';

const initial = Map({
  x: 0,
  y: 0,
  node_id: undefined,
  event: Map(),
});

const tooltip = (state = initial, action) => {
  switch (action.type) {
  case SHOW_TOOLTIP:
    const {x, y, node_id, event} = action.payload;
    return state
      .set('x', x)
      .set('y', y)
      .set('node_id', node_id)
      .set('event', Map(event));
  default:
    return state;
  }
};

export default tooltip;
