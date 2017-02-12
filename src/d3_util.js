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
