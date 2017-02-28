const PassiveNodeInstance = require('./PassiveNode');
const PassiveNode = require('./PassiveNodeConst');

module.exports = class PassiveTree {
  /**
   * @constructor
   * @param {Object} tree_data
   * @param {any} id a unique id
   */
  constructor(tree_data, id) {
    this.data = tree_data;
    this.id = id;

    this.groups = PassiveTree.initGroups(this.data);
    this.nodes = PassiveTree.initNodes(this.data);
    this.edges = PassiveTree.initEdges(this);

    /*
     * although we get min/max coords they don't include the ascendancy
     * so we do its ourselves
     * could do it via nodes but if we use the groups with the orbits
     * we get a nice padding that could still be not enough
     * if we draw the nodes to big
     */
    this.dimensions = PassiveTree.calcDimension(this);
  }

  /**
   * checks if the edge between these nodes is Path of X to X edge
   *
   * @param {PassiveNode} source
   * @param {PassiveNode} target
   * @return {boolean}
   */
  static scionPathOfEdge(source, target) {
    return source.ascendancy != target.ascendancy;
  }

  /**
   * map instead of object for ease of use
   * @param {Object} tree_data ggg tree json
   * @return {Map}
   */
  static initGroups(tree_data) {
    return new Map(Object.entries(tree_data.groups));
  }

  /**
   * map instead of object for ease of use
   * @param {Object} tree_data ggg tree json
   * @return {Map}
   */
  static initNodes(tree_data) {
    return new Map(tree_data.nodes.map((n) => {
      // [key, value]
      return [n.id, new PassiveNodeInstance(n, tree_data.groups)];
    }));
  }

  /**
   * map instead of object for ease of use
   * @param {PassiveTree} passive_tree
   * @return {[source_node, target_node][]} array of [source, target] pairs
   */
  static initEdges(passive_tree) {
    const edges = [];

    passive_tree.nodes.forEach((node) => {
      node.adjacent.forEach((adj_id) => {
        edges.push([node, passive_tree.nodes.get(adj_id)]);
      });
    });

    return edges;
  }

  /**
   * calculate dimensions of the tree
   * @param {PassiveTree} passive_tree
   * @return {number[]} [min_x, min_y, max_x, max_y]
   */
  static calcDimension(passive_tree) {
    let dimensions = [
      Number.POSITIVE_INFINITY, // min_x
      Number.POSITIVE_INFINITY, // min_y
      Number.NEGATIVE_INFINITY, // max_x
      Number.NEGATIVE_INFINITY,  // max_y
    ];

    const max_radius = Math.max(...PassiveNode.orbit_radii);

    for (const group of passive_tree.groups.values()) {
      dimensions = [
        Math.min(group.x - max_radius, dimensions[0]),
        Math.min(group.y - max_radius, dimensions[1]),
        Math.max(group.x + max_radius, dimensions[2]),
        Math.max(group.y + max_radius, dimensions[3]),
      ];
    };

    return dimensions;
  }

  /**
   * svg viewbox
   * @return {[*]}
   */
  get viewbox() {
    return [
      this.dimensions[0],
      this.dimensions[1],
      this.width,
      this.height,
    ];
  }

  /**
   * calculates the width of the tree
   */
  get width() {
    return this.dimensions[2] - this.dimensions[0];
  }

  /**
   * calculates the height of the tree
   */
  get height() {
    return this.dimensions[3] - this.dimensions[1];
  }

  /**
   * scales the given x in this tree to the matching x on a new container
   * with a different width assuming top left is 0,0
   *
   * @param {number} x
   * @param {number} new_width
   * @return {number}
   */
  xScaled(x, new_width) {
    return (x - this.dimensions[0]) * new_width / this.width;
  }

  /**
   * see this.xScaled
   *
   * @param {number} y
   * @param {number} new_height
   * @return {number}
   */
  yScaled(y, new_height) {
    return (y - this.dimensions[1]) * new_height / this.height;
  }

  /**
   * @param {PassiveTree} other
   * @return {boolean}
   */
  equals(other) {
    return this.id === other.id;
  }
};
