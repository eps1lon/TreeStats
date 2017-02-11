export const FETCH_SOURCES_FROM_JSON = 'SOURCES_FROM_JSON';
export const SET_SOURCES = 'SET_SOURCES';

export const SET_ACTIVE = 'SET_ACTIVE';

import { insertRows } from './db';
import { jsonFactory } from '../../data_sources/factory';

/**
 * thunk to generate sources from json file
 *
 * @param {string} filename
 * @return {function} thunk
 */
export function fetchSourcesFromJson(filename) {
  return (dispatch) => {
    dispatch({ type: FETCH_SOURCES_FROM_JSON });

    return jsonFactory(filename)
      .then((sources) => dispatch(setSourcesArray(sources)));
  };
};

/**
 * action-creator to set sources
 *
 * @param {Map} sources
 * @return {Object} action
 */
export function setSources(sources) {
  return (dispatch) => {
    dispatch({
      type: SET_SOURCES,
      payload: { sources },
    });

    dispatch(setActive(sources.keys().next().value));
  };
}

/**
 * setSources with a map from array (i => value)
 * @param {Array} sources
 * @return {Object} action
 */
function setSourcesArray(sources) {
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
    dispatch({
      type: SET_ACTIVE,
      payload: { active },
    });

    const state = getState();
    const source = state.get('data').get('sources').get(active);

    dispatch(insertRows(source.rows));
  };
}
