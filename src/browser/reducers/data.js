/* eslint new-cap: off */
import { Map, OrderedMap } from 'immutable';
import {
  FETCH_SOURCES_FROM_JSON,
  SET_SOURCES,
  SET_ACTIVE,
} from '../actions/data';

export const defaultSource = (state) => {
  return state.getIn(['data', 'sources']).keySeq().first();
};

const initial = Map({
  active: undefined,
  sources: OrderedMap(),
  loading: false,
});

const data = (state = initial, action) => {
  switch (action.type) {
    case FETCH_SOURCES_FROM_JSON:
      return state.withMutations((state) => {
        state.set('active', undefined);
        state.set('sources', OrderedMap());
        state.set('loading', true);
      });
    case SET_SOURCES:
      return state.withMutations((state) => {
        state.set('active', undefined);
        state.set('sources', OrderedMap(action.payload.sources));
        state.set('loading', false);
      });
    case SET_ACTIVE:
      return state.set('active', action.payload.active);
    default:
      return state;
  }
};

export default data;
