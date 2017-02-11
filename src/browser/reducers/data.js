import { Map } from 'immutable';
import {
  FETCH_SOURCES_FROM_JSON,
  SET_SOURCES,
  SET_ACTIVE,
} from '../actions/data';

const initial = Map({
  active: undefined,
  sources: Map(),
});

const data = (state = initial, action) => {
  switch (action.type) {
    case FETCH_SOURCES_FROM_JSON:
      return state.withMutations((state) => {
        state.set('active', undefined);
        state.set('sources', Map());
      });
    case SET_SOURCES:
      return state.withMutations((state) => {
        state.set('active', undefined);
        state.set('sources', Map(action.payload.sources));
      });
    case SET_ACTIVE:
      return state.set('active', action.payload.active);
    default:
      return state;
  }
};

export default data;
