import { getLocation } from './routing';

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
