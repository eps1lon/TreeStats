const PoeTree = require('./PassiveTree');

/**
 * view helper class that determines if various elements of
 * the given tree are visible under a conf Object
 */
class PassiveTreeConf {
    /**
     * @param {PassiveTree} passive_tree
     * @param {Object} conf_props
     */
    constructor(passive_tree, conf_props) {
        /**
         * @type {PassiveTree}
         */
        this.tree = passive_tree;
        /**
         * @type {Object}
         */
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
        const conf = this.props;

        return (conf.group_orbits);
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
