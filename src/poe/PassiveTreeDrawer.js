const DRAW_EDGE = Symbol('key for drawEdge cb');
const DRAW_NODE = Symbol('key for drawNode cb');
const DRAW_GROUP = Symbol('key for drawGroup cb');

/**
 * thats an abstract class
 * so throw some error on every method
 * so signal no impl
 */
module.exports = class PassiveTreeDrawer {
    /**
     * @param {PassiveTree} poe_tree
     */
    constructor(poe_tree) {
        this.tree = poe_tree;

        this.conf = {
            [DRAW_NODE]: PassiveTreeDrawer.drawAll,
            [DRAW_EDGE]: PassiveTreeDrawer.drawAll,
            [DRAW_GROUP]: PassiveTreeDrawer.drawAll,
        };
    }

    /**
     * @param {function} nodes_cb gets node passed, return true if drawn
     *
     */
    * nodesDrawn(nodes_cb) {
        if (nodes_cb) {
            this.conf[DRAW_NODE] = nodes_cb;
        }

        for (const [node_id, node] of this.tree.nodes) {
            if (this.conf[DRAW_NODE](node)) {
                yield [node_id, node];
            }
        }
    }

    /**
     * abstract
     */
    drawNodes() {
        throw new Error('PassiveTreeDrawer.drawNodes not implemented');
    }

    /**
     * @param {function} groups_cb gets group passed, return true if drawn
     *
     */
    * groupsDrawn(groups_cb) {
        if (groups_cb) {
            this.conf[DRAW_GROUP] = groups_cb;
        }

        for (const [group_id, group] of this.tree.groups) {
            if (this.conf[DRAW_GROUP](group)) {
                yield [+group_id, group];
            }
        }
    }

    /**
     * abstract
     */
    drawGroups() {
        throw new Error('PassiveTreeDrawer.drawGroups not implemented');
    }

    /**
     * @param {function} edges_cb gets node, adj passed, return true if drawn
     *
     */
    * edgesDrawn(edges_cb) {
        if (edges_cb) {
            this.conf[DRAW_EDGE] = edges_cb;
        }

        for (const [node, adj] of this.tree.edges) {
            if (this.conf[DRAW_EDGE](node, adj)) {
                yield [node, adj];
            }
        }
    }

    /**
     * abstract
     */
    drawEdges() {
        throw new Error('PassiveTreeDrawer.drawGroups not implemented');
    }

    /**
     * abstract
     */
    viewFull() {
        throw new Error('PassiveTreeDrawer.viewFull not implemented');
    }

    /**
     * draws everything relevant to the passive tree
     * @param {Object} user_conf
     */
    draw(user_conf = {}) {
        this.conf = Object.assign(this.conf, user_conf);

        // clear old
        this.clear();

        this.drawGroups(this.conf[DRAW_GROUP]);
        this.drawNodes(this.conf[DRAW_NODE]);
        this.drawEdges(this.conf[DRAW_EDGE]);
    }

    /**
     * abstract
     */
    clear() {
        throw new Error('PassiveTreeDrawer.clear not implemented');
    }

    /**
     * refreshes the drawn tree
     */
    refresh() {
        this.clear();
        this.draw();
    }

    /**
     * calculates the max radius for each group
     *
     * @return {Map} group_id => max radius
     */
    get radii() {
        // group_id => radii of nodes of that group
        const radii = new Map();

        for (const [, node] of this.nodesDrawn()) {
            if (radii.has(node.group_id)) {
                radii.get(node.group_id).add(node.radius);
            } else {
                radii.set(node.group_id, new Set([node.radius]));
            }
        }

        return radii;
    }

    /**
     * default cb to check if something should be drawn
     * which defaults to true
     *
     * @return {boolean}
     */
    static drawAll() {
        return true;
    }
};
