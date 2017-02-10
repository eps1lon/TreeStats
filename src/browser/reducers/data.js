import {Map, List} from 'immutable';
import {FETCH_SOURCES_FROM_JSON, SET_SOURCES} from '../actions/data';

const initial = Map({
  active: undefined,
  sources: Map(),
});

const data = (state = initial, action) => {
  switch (action.type) {
  case FETCH_SOURCES_FROM_JSON:
    return state
      .set('active', undefined)
      .set('sources', Map());
  case SET_SOURCES:
    return state
      .set('active', undefined)
      .set('sources', Map(action.payload.sources));
  default:
    return state;
  }
};

export default data;
