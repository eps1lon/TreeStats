import Immutable, { List, Map } from 'immutable';

import {
  CALCULATE,
  SET,
  EXTREMA_CHANGE,
} from '../actions/heatmap';

export const STATE = {
  CALCULATING: 'CALCULATING',
  READY: 'READY',
};

const initial = Map({
  data: List(),
  max: 0,
  hash: null,
  instance: null,
  legend: Map({
    min: 0,
    max: 0,
    gradient: Map(),
  }),
  state: STATE.READY,
});

const heatmap = (state = initial, action) => {
  switch (action.type) {
    case SET:
      return state.withMutations((state) => {
        state.set('max', action.payload.max);
        state.set('data', List(action.payload.data));
        state.set('hash', action.payload.hash);
        state.set('state', STATE.READY);
      });
    case CALCULATE:
      return state.set('state', STATE.CALCULATING);
    case EXTREMA_CHANGE:
      return state.set('legend', Immutable.fromJS(action.payload.legend));
    default:
      return state;
  }
};

export default heatmap;
