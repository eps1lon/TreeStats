/**
 * const relevant to PoeNode
 *
 * main goal was to PoeNode = require('PoeNode.js'); node = new PoeNode();
 * types = PoeNode.types
 * but there is no such thing as static getter
 */
module.exports = Object.freeze({
  orbit_radii: [0, 82, 162, 335, 493],
  skills_per_orbit: [1, 6, 12, 12, 40],
  /**
   * special node types
   * @type {[*]}
   */
  types: [
    'keystone',
    'mastery',
    'notable',
    'start',
    'ascendancy',
    'jewel_socket',
  ],
  /**
   * sprite sizes of the types
   * @type {}
   */
  sizes: {
    'keystone': 53,
    'mastery': 99,
    'notable': 38,
    'start': 40,
    'ascendancy': 27,
    'jewel_socket': 40,
    'normal': 27,
  },
});
