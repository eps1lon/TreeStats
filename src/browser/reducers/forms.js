import { Map } from 'immutable';

import { SELECT_ANY } from '../actions/rows';
import { slugify as slugifyMap } from '../helpers/map';

export const initial_filter = Map({
  league: SELECT_ANY,
  klass: SELECT_ANY,
  last_active: 7,
  last_active_base: 60*60*24, // days as default
  limit: 15000,
  offset: 0,
});

/**
 * @param {Map} form
 * @return {number} the value in seconds
 */
export function activeForSeconds(form) {
  return form.get('last_active') * form.get('last_active_base');
}

// https://www.patrick-wied.at/static/heatmapjs/docs.html#h337-create
export const initial_heatmap_conf = Map({
  blur: 85,
  min_opacity: 5,
  max_opacity: 55,
  radius: 40,
});

export const initial_tree_conf = Map({
  group_orbits: false,
  start: false,
  scionPathOf: false,
  ascendancy: true,
  mastery: false,
  node_scale: 1.7,
});

/**
 * object for react-redux-form/immutable createForms
 * it returns an empty object if we use immutable types
 * @type {Object}
 */
const forms = {
  data_filter: initial_filter,
  heatmap_conf: initial_heatmap_conf,
  passive_tree_conf: initial_tree_conf,
};

/**
 * @param {Map} form a form defined in this file
 * @return {string} slugified string of the form
 */
export function slugify(form) {
  return slugifyMap(form.map((value) => value === SELECT_ANY ? 'any' : value));
}

export default forms;
