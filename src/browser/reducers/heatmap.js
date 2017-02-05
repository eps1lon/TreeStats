import {
  CALCULATE_HEATMAP_DATA,
  EXTREMA_CHANGE,
  SET_INSTANCE,
} from '../actions/heatmap';

const initial = {
  data: [],
  max: 0,
  hash: null,
  instance: null,
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
  case SET_INSTANCE:
    return {
      ...state,
      instance: action.payload.instance,
    };
  default:
    return state;
  }
};

export default heatmap;
