import Immutable, { List, Map } from 'immutable';

import {
  CALCULATE,
  SET,
  EXTREMA_CHANGE,
  DATA_CHANGE,
} from '../actions/heatmap';

export const STATE = {
  CALCULATING: 'CALCULATING',
  READY: 'READY',
};

const initial = Map({
  data: List(),
  data_url: undefined,
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

/**
 * returns a dispatchable object which can be serialized for usage
 * in a history
 * @param {Map} state redux state
 * @return {Object} for dispatch()
 */
export function replaySet(state) {
  return {
    type: SET,
    payload: {
      max: state.get('max'),
      data: state.get('data'),
      hash: state.get('hash'),
    },
  };
}

const heatmap = (state = initial, action) => {
  switch (action.type) {
    case SET:
      // tightly couple with replayState! change accordingly
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
    case DATA_CHANGE:
      return state.set('data_url', action.payload.data_url);
    default:
      return state;
  }
};

export default heatmap;
