/* eslint new-cap: off */
const Buffer = require('buffer/').Buffer;

module.exports = {
  /**
   *
   * @param {string} str the encoded string from an url
   * @return {{version: *, starting_class: *, ascendancy: *,
   * fullscreen: number, nodes: Array}}
   */
  decode: function(str) {
    // deduced from loadHistoryUrl
    const buf = Buffer(str.replace(/-/g, '+').replace(/_/g, '/'), 'base64');

    let i = 0;

    const version = buf.readInt32BE(i);
    i += 4;

    const starting_class = buf.readInt8(i);
    i += 1;

    const ascendancy = buf.readInt8(i);
    i += 1;

    let fullscreen = 0;
    // source says > 0, PoESkillTree > 3
    // we will adjust our offset before we start looping
    if (version > 0) {
      fullscreen = buf.readInt8(i);
      i += 1;
    }

    const nodes = [];

    // see version comment
    for (i -= (buf.length - i) % 2; i < buf.length; i += 2) {
      nodes.push(buf.readUInt16BE(i));
    }

    return {
      version: version,
      starting_class: starting_class,
      ascendancy: ascendancy,
      fullscreen: fullscreen,
      nodes: nodes,
    };
  },
  /**
   * computes string for usage in tree planers
   *
   * @param {number} version
   * @param {number} starting_class
   * @param {number} ascendancy
   * @param {number[]} nodes
   * @param {number} fullscreen
   * @return {string}
   */
  encode: function(version, starting_class, ascendancy, nodes,
    fullscreen = 0) {
    const size = nodes.length * 2 + 6 + (version > 0 ? 1 : 0);
    let i = 0;

    const buf = new Buffer(size);

    buf.writeInt32BE(version, i);
    i += 4;

    buf.writeInt8(starting_class, i);
    i += 1;

    buf.writeInt8(ascendancy, i);
    i += 1;

    if (version > 0) {
      buf.writeInt8(fullscreen, i);
      i += 1;
    }

    for (let node of nodes) {
      buf.writeUInt16BE(node, i);

      i += 2;
    }

    return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
  },
};
