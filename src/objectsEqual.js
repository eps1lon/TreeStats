/**
 * checks if two simple objects are deep equal
 *
 * @param {Object} o1
 * @param {Object} o2
 * @return {boolean} true if deep equal
 */
export default function objectsEqual(o1, o2) {
    return JSON.stringify(o1) === JSON.stringify(o2);
};
