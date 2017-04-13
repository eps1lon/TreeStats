/**
 * add the size to get correct modulo behavior when dealing with
 * negative underflow
 * e.g. -1 % 12 = -1 in js but we want 11
 * mimics ABEL group 0..(max-1)
 *
 * @param {Number} current
 * @param {Number} max
 * @param {Number} add
 * @return {Number}
 */
export function add(current, max, add) {
  return max > 0 ? (current + add + max) % max : 0;
}
