import { insertRows } from './db';
import { publicPath } from '../helpers/url';

export const FETCH_SOURCES_FROM_JSON = 'SOURCES/FROM_JSON';
export const SET_SOURCES = 'SOURCES/SET';
export const SET_ACTIVE = 'SOURCES/ACTIVATE';

/**
 * thunk to generate sources from json file
 *
 * @param {string} filename
 * @return {function} thunk
 */
export function fetchSourcesFromJson(filename) {
  return {
    type: FETCH_SOURCES_FROM_JSON,
    payload: publicPath(filename),
  };
};

/**
 * action-creator to set sources
 *
 * @param {Map} sources
 * @return {Object} action
 */
export function setSources(sources) {
  return {
    type: SET_SOURCES,
    payload: { sources },
  };
}

/**
 * setSources with a map from array (i => value)
 * @param {Array} sources
 * @return {Object} action
 */
export function setSourcesArray(sources) {
  return setSources(new Map(sources.map((source, i) => [i + '', source])));
};

/**
 * sets the active data source and triggers the insert of the rows
 * of the source
 * @param {string} active key in data.sources map
 * @return {thunk}
 */
export function setActive(active) {
  return (dispatch, getState) => {
    let source = getSourceByKey(getState(), active);

    if (source === undefined) {
      // assert that defaultSource returns an existing one
      // but for safety dont dispatch setActive(defaultSource())
      // to avoid infinite recursion
      active = defaultSource(getState());
      source = getSourceByKey(getState(), active);
    }

    dispatch({
      type: SET_ACTIVE,
      payload: { active },
    });

    dispatch(insertRows(source.rows));
  };
}

/**
 * selects the source by the given key
 * @param {Map} state redux state
 * @param {Any} key
 * @return {AbstractDataSource}
 */
export function getSourceByKey(state, key) {
  return state.getIn(['data', 'sources', key]);
};
