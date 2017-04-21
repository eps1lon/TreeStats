/**
 * @param {Map} map
 * @return {string} slugified string of the map
 */
export function slugify(map) {
  return map.entrySeq().map((entry) => entry.join('-')).join('-');
};
