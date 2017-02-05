import {SHOW_TOOLTIP} from '../actions/tooltip';

const initial = {
  x: 0,
  y: 0,
  node_id: undefined,
  event: null,
};

const tooltip = (state = initial, action) => {
  switch (action.type) {
  case SHOW_TOOLTIP:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default tooltip;
