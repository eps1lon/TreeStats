const PoeTree = require('./PassiveTree');

/**
 * view helper class that determines if various elements of
 * the given tree are visible under a conf Object
 */
class PassiveTreeConf {
  /**
   * @param {Object} conf_props
   * @param {boolean} conf_props.group_orbits display group_orbits?
   * @param {boolean} conf_props.start display start nodes?
   * @param {boolean} conf_props.scionPathOf display ScionPathOfX edge?
   * @param {boolean} conf_props.ascendancy display ascendancy nodes?
   * @param {boolean} conf_props.mastery display mastery nodes?
   * @param {boolean} conf_props.node_scale scale for {PassiveNode#size}
   */
  constructor(conf_props) {
    this.props = conf_props;
  }

  /**
   * @return {number}
   */
  get node_scale() {
    return +this.props.node_scale;
  }

  /**
   * @param {PassiveNode} node
   * @return {boolean}
   */
  isVisibleNode(node) {
    const conf = this.props;

    return (conf.mastery || !node.mastery)
      && (conf.start || !node.start)
      && (conf.ascendancy || !node.ascendancy);
  }

  /**
   * @param {PassiveNode} source
   * @param {PassiveNode} target
   * @return {boolean}
   */
  isVisibleEdge(source, target) {
    const conf = this.props;

    // no start node connection
    return (conf.start || !source.start && !target.start)
      // no scion path of x edges
      && (conf.scionPathOf || !PoeTree.scionPathOfEdge(source, target))
      // no ascendancy edges
      && (conf.ascendancy || !source.ascendancy);
  };

  /**
   * @param {Object} group
   * @return {boolean}
   */
  isVisibleGroup(group) {
    return this.props.group_orbits;
  };

  /**
   * @param {PassiveTreeConf} other
   * @return {boolean}
   */
  equals(other) {
    return JSON.stringify(this.props) === JSON.stringify(other.props);
  }
}

export default PassiveTreeConf;
