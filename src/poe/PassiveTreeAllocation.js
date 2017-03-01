/* eslint new-cap: off */
const PassiveTreeUrl = require('./PassiveTreeUrl');
const POE = require('./data');
const AllocationMalformedError = require('./AllocationMalformedError');
const Map = require('immutable').Map;
const Set = require('immutable').Set;

/**
 * represents an allocation of nodes on a PassiveTree
 */
class PassiveTreeAllocation {
  /**
   * @param {Object} allocation
   * @param {PassiveTree} tree
   */
  constructor({
    nodes=[], starting_class=0, ascendancy=0,
    version=4, fullscreen=0,
  }, tree) {
    this.tree = tree;
    this.nodes
      = Map(nodes.map((node_id) => [node_id, tree.nodes.get(node_id)]));
    this.starting_class = starting_class;
    this.ascendancy = ascendancy;
    this.version = version;
    this.fullscreen = fullscreen;
  }

  /**
   * @param {Object[]} nodes
   * @return {Object} class
   */
  ascendancyFromNodes() {
    let ascendancies = Set();
    for (const node of this.nodes.values()) {
      if (node && node.ascendancy) {
        ascendancies = ascendancies.add(node.props.ascendancyName);
      }
    }

    if (ascendancies.size > 1) {
      throw new AllocationMalformedError(
        'found nodes for more than 1 ascendancy: "' +
        [...ascendancies.values()].join('", "') + '"'
      );
    }

    return POE.classes.find((klass) => klass.name === ascendancies.first());
  }

  /**
   * @return {Object} the starting class allocated in the nodes
   */
  startingClassFromNodes() {
    let classes = Set();

    for (const node of this.nodes.values()) {
      if (node && node.start) {
        classes = classes.add(node.starting_class);
      }
    }

    if (classes.size === 0) {
      const ascendancy = this.ascendancyFromNodes();

      if (!ascendancy) {
        return undefined;
      }

      return POE.classes.find((_, id) => ascendancy.parent === id);
    } else if (classes.size > 1) {
      throw new AllocationMalformedError(
        'found nodes for more than 1 class: "' +
        [...classes.values()].join('", "') + '"'
      );
    }

    return POE.classes.find((klass) => klass.name === classes.first());
  }

  /**
   * @return {boolean} true if allocated nodes are valid with ascendancy choice
   */
  validAscendancy() {
    const ascendancy = this.ascendancyFromNodes();

    const consistent = ascendancy && ascendancy.ascendancy === this.ascendancy;

    return consistent;
  }

  /**
   * @return {boolean} true if allocated nodes are valid with starting class
   * this should currently always return true if no ascendancy is picked
   * the starting class nodes are not actually allocated
   */
  validStartingClass() {
    const starting_class = this.startingClassFromNodes();
    const ascendancy = this.ascendancyFromNodes();

    const consistent = starting_class
      && starting_class.character_class == this.starting_class
      && (!ascendancy || ascendancy.character_class === this.starting_class);

    return consistent;
  }

  /**
   * @return {boolean} true if valid allocation
   */
  isValid() {
    return this.validAscendancy() && this.validStartingClass();
  }

  /**
   * @param {string} url
   * @param {PassiveTree} tree
   * @return {PassiveTreeAllocation}
   */
  static fromUrl(url, tree) {
    return new PassiveTreeAllocation(PassiveTreeUrl.decode(url), tree);
  }

  /**
   * @return {string} base64 encoded string
   */
  toString() {
    return PassiveTreeUrl.encode(
      this.version,
      this.starting_class,
      this.ascendancy,
      [...this.nodes.keys()],
      this.fullscreen
    );
  }
};

module.exports = PassiveTreeAllocation;
