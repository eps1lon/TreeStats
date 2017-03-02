import { Map } from 'immutable';
import { zoomIdentity } from 'd3-zoom';

/**
 * @param {d3-transform} t1
 * @param {d3-transform} t2
 * @return {boolean} if the applied transformation is equal
 */
export function transformEqual(t1, t2) {
  return t1.x === t2.x
    && t1.y === t2.y
    && t1.k === t2.k;
};

/**
 * supports zoom transformation for html elements
 *
 * @param {d3-transform} transform
 * @return {string} the div style attr for transform
 */
export function browserTransform(transform) {
  const translation = `translate(${transform.x | 0}px`
                    + `, ${transform.y | 0}px)`;
  const scale = `scale(${transform.k})`;

  return [translation, scale].join(' ');
};

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
