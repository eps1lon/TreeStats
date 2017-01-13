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

    drawNodes() {
        throw "PoeTreeDrawer.drawNodes not implemented";
    }

    drawGroups() {
        throw "PoeTreeDrawer.drawGroups not implemented";
    }

    drawEdges() {
        throw "PoeTreeDrawer.drawEdges not implemented";
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