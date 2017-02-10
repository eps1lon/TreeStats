export const FETCH_SOURCES_FROM_JSON = 'SOURCES_FROM_JSON';
export const SET_SOURCES = 'SET_SOURCES';

import {jsonFactory} from '../../data_sources/factory';

/**
 * thunk to generate sources from json file
 *
 * @param {string} filename
 * @return {function} thunk
 */
export function fetchSourcesFromJson(filename) {
  return (dispatch) => {
    dispatch({type: FETCH_SOURCES_FROM_JSON});

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
  return {
    type: SET_SOURCES,
    payload: {sources},
  };
}

/**
 * setSources with a map from array (i => value)
 * @param {Array} sources
 * @return {Object} action
 */
function setSourcesArray(sources) {
  return setSources(sources.map((source, i) => [i, source]));
};
