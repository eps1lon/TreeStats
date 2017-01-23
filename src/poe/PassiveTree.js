const PassiveNodeInstance = require('./PassiveNode');
const PassiveNode = require('./PassiveNodeConst');

module.exports = class {
    /**
     * checks if the edge between these nodes is Path of X to X edge
     *
     * @param source
     * @param target
     * @returns {boolean}
     */
    static scionPathOfEdge(source, target) {
        return source.ascendancy != target.ascendancy
    }

    constructor(tree_data) {
        this.data = tree_data;
        this.groups = new Map(Object.entries(this.data.groups));
        //noinspection JSUnresolvedFunction
        this.nodes = new Map(this.data.nodes.map(function (n) {
            // [key, value]
            return [n.id, new PassiveNodeInstance(n, tree_data.groups)]
        }));

        this.edges = []
        for (const node of this.nodes.values()) {
            for (const adj_id of node.adjacent) {
                this.edges.push([node, this.nodes.get(adj_id)]);
            }
        }

        /*
         * although we get min/max coords they don't include the ascendancy
         * so we do its ourselves
         * could do it via nodes but if we use the groups with the orbits
         * we get a nice padding that could still be not enough if we draw the nodes to big
         */
        this.dimensions = [
            Number.POSITIVE_INFINITY, // min_x
            Number.POSITIVE_INFINITY, // min_y
            Number.NEGATIVE_INFINITY, // max_x
            Number.NEGATIVE_INFINITY  // max_y
        ];

        const max_radius = Math.max(...PassiveNode.orbit_radii);
        for (let group of this.groups.values()) {
            this.dimensions = [
                Math.min(group.x - max_radius, this.dimensions[0]),
                Math.min(group.y - max_radius, this.dimensions[1]),
                Math.max(group.x + max_radius, this.dimensions[2]),
                Math.max(group.y + max_radius, this.dimensions[3])
            ]

        }
    }

    /**
     * svg viewbox
     * @returns {[*]}
     */
    get viewbox() {
        return [
            this.dimensions[0],
            this.dimensions[1],
            this.width,
            this.height
        ];
    }

    get width() {
        return this.dimensions[2] - this.dimensions[0]
    }

    get height() {
        return this.dimensions[3] - this.dimensions[1]
    }

    /**
     * scales the given x in this tree to the matching x on a new container with a different width
     * assuming top left is 0,0
     *
     * @param x
     * @param new_width
     * @returns {number}
     */
    xScaled(x, new_width) {
        return (x - this.dimensions[0]) * new_width / this.width
    }

    /**
     * see this.xScaled
     *
     * @param y
     * @param new_height
     * @returns {number}
     */
    yScaled(y, new_height) {
        return (y - this.dimensions[1]) * new_height / this.height
    }
}