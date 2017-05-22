/* eslint new-cap: off */
import { Map, OrderedMap } from 'immutable';

import {
  FETCH_SOURCES_FROM_JSON,
  SET_SOURCES,
  SET_ACTIVE,
} from '../actions/data';
import { getLocation } from '../selectors/routing';
import { ctimeOutFile } from '../../../task/lib/treesToCsvFile';

export const defaultSource = (state) => {
  return getLocation(state).getIn(['query', 'source'])
  || state.getIn(['data', 'sources']).keySeq().first();
};

/**
 * returns currently active source
 * @param {Map} state data state
 * @return {DataSource}
 */
export function activeSource(state) {
  return state.get('sources').get(state.get('active'));
}

/**
 * @param {AbstractDataSource} data_source
 * @return {number} -inf on undefined source
 */
export function ctime(data_source) {
  if (data_source) {
    return ctimeOutFile(data_source.filename);
  } else {
    return Number.NEGATIVE_INFINITY;
  }
}

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
