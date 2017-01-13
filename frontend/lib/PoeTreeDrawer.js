const DRAW_EDGE = Symbol("key for drawEdge cb");
const DRAW_NODE = Symbol("key for drawNode cb");
const DRAW_GROUP = Symbol("key for drawGroup cb");

/**
 * thats an abstract class
 * so throw some error on every method
 * so signal no impl
 */
class PoeTreeDrawer {
    constructor(poe_tree) {
        this.tree = poe_tree;

        this.conf = {
            [DRAW_NODE]: PoeTreeDrawer.drawAll,
            [DRAW_EDGE]: PoeTreeDrawer.drawAll,
            [DRAW_GROUP]: PoeTreeDrawer.drawAll
        };
    }

    *nodesDrawn(nodes_cb) {
        if (nodes_cb) {
            this.conf[DRAW_NODE] = nodes_cb;
        }

        for (const [node_id, node] of this.tree.nodes) {
            if (this.conf[DRAW_NODE](node)) {
                yield [node_id, node];
            }
        }
    }

    drawNodes() {
        throw "PoeTreeDrawer.drawNodes not implemented";
    }

    *groupsDrawn(groups_cb) {
        if (groups_cb) {
            this.conf[DRAW_GROUP] = groups_cb;
        }

        for (const [group_id, group] of this.tree.groups) {
            if (this.conf[DRAW_GROUP](group)) {
                yield [+group_id, group];
            }
        }
    }

    drawGroups() {
        throw "PoeTreeDrawer.drawGroups not implemented";
    }

    *edgesDrawn(edges_cb) {
        if (edges_cb) {
            this.conf[DRAW_EDGE] = edges_cb;
        }

        for (const [node, adj] of this.tree.edges) {
            if (this.conf[DRAW_EDGE](node, adj)) {
                yield [node, adj];
            }
        }
    }

    drawEdges() {
        throw "PoeTreeDrawer.drawGroups not implemented";
    }

    viewFull() {
        throw "PoeTreeDrawer.viewFull not implemented";
    }

    draw(user_conf = {}) {
        this.conf = Object.assign(this.conf, user_conf);

        // clear old
        this.clear();

        this.drawGroups(this.conf[DRAW_GROUP]);
        this.drawNodes(this.conf[DRAW_NODE]);
        this.drawEdges(this.conf[DRAW_EDGE]);
    }

    clear() {
        throw "PoeTreeDrawer.clear not implemented";
    }

    refresh() {
        this.clear();
        this.draw();
    }

    static drawAll() {
        return true
    }
}