import { Map } from 'immutable';
import { zoomIdentity } from 'd3-zoom';

/**
 * @param {d3Transform} transform
 * @return {Map} immutable map with relevant props for d3Transform creation
 */
export function transformToImmutable(transform) {
  return Map(transform);
};

/**
 * @param {Map} map
 * @return {d3Transform}
 */
export function immutableToTransform(map) {
  return zoomIdentity
    .scale(map.get('k'))
    .translate(map.get('x'), map.get('y'));
};
