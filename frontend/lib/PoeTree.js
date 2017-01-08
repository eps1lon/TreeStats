const blacklistNone = function () {
    return false
};

class PoeTree {
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

    /**
     * computes a svg path for an arc between 2 nodes
     * @param start {PoeNode}
     * @param end {PoeNode}
     * @returns {string}
     */
    static describeArc(start, end){
        const x = start.group.x;
        const y = start.group.y;
        const r = start.radius;
        const tau = 2 * Math.PI;

        let start_angle = start.angle;
        let end_angle = end.angle;

        if (start_angle > end_angle){
            [start_angle, end_angle] = [end_angle, start_angle]
        }

        if (end_angle - start_angle > tau) {
            end_angle = tau - Number.EPSILON;
        }

        let sweep = 0;
        if (end_angle - start_angle > Math.PI) {
            sweep = 1;
        }

        return [
            //'M', x, y,
            'M', x + Math.cos(start_angle) * r, y - (Math.sin(start_angle) * r),
            'A', r, r, 0, 0, sweep, x + Math.cos(end_angle) * r, y - (Math.sin(end_angle) * r),
            //'L', x, y
        ].join(' ');
    }

    constructor(tree_data) {
        this.data = tree_data;
        this.groups = new Map(Object.entries(this.data.groups));
        //noinspection JSUnresolvedFunction
        this.nodes = new Map(this.data.nodes.map(function (n) {
            // [key, value]
            return [n.id, new PoeNode(n, tree_data.groups)]
        }));

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

        const max_radius = Math.max(...orbit_radii);
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

    drawGroups(d3_svg) {
        // group_id => radii of nodes of that group
        let radii = new Map();

        for (let node of this.nodes.values()) {
            if (radii.has(node.group_id)) {
                radii.get(node.group_id).add(node.radius)
            } else {
                radii.set(node.group_id, new Set([node.radius]))
            }
        }

        for (let group_id of Object.keys(this.data.groups)) {
            const group = this.data.groups[group_id];
            group_id = +group_id;

            if (!radii.has(group_id)) {
                radii.set(group_id, [0])
            }

            d3_svg.append("circle")
                .attr("r", Math.max(...radii.get(group_id)))
                .attr("cx", group.x)
                .attr("cy", group.y)
                .attr("class", "tree_group")
                .attr("id", `node_group_${group_id}`)
                .append("svg:title")
                    .text(group_id);

            for (let r of radii.get(group_id)) {
                d3_svg.append("circle")
                    .attr("r", r)
                    .attr("cx", group.x)
                    .attr("cy", group.y)
                    .attr("class", "group_orbit")
                    .attr("data-orbit-of", group_id)
            }
        }
    }

    /**
     * draws every node
     *
     * @param d3_svg
     */
    drawNodes(d3_svg, blacklist_fn = blacklistNone) {
        for (let [node_id, node] of this.nodes) {
            if (!blacklist_fn(node)) {
                d3_svg.append("circle")
                    .attr("r", Math.pow(2, node.size) * 20)
                    .attr("cx", node.x)
                    .attr("cy", node.y)
                    .attr("class", ["tree_node", ...node.types].join(" "))
                    .attr("id", `node_${node_id}`)
                    .append("svg:title")
                    .text(node.inspect)
            }
        }
    }

    /**
     * draws the edges between nodes
     *
     * @param d3_svg
     * @param blacklist_fn a callback that given the source and the target should return true
     *                       if you don't want the edge to be drawn
     */
    drawEdges(d3_svg, blacklist_fn = blacklistNone) {
        for (let node of this.nodes.values()) {
            const x1 = node.x;
            const y1 = node.y;

            for (let adj_id of node.adjacent) {
                const adj = this.nodes.get(adj_id);

                if (!blacklist_fn(node, adj)) {
                    const class_names = ["tree_edge", ...node.types, ...adj.types];

                    // same orbit and same group
                    if (node.orbit == adj.orbit && node.group_id == adj.group_id) {
                        d3_svg.append("path")
                            .attr("class", class_names.join(" "))
                            .attr("d", PoeTree.describeArc(node, adj))
                            .attr("fill", "none");//*/
                    } else {
                        d3_svg.append("line")
                            .attr("class", class_names.join(" "))
                            .attr("x1", x1)
                            .attr("y1", y1)
                            .attr("x2", adj.x)
                            .attr("y2", adj.y)
                    }
                }
            }
        }
    }

    /**
     * adjusts the viewBox so that we can see everything
     * @param d3_svg
     */
    viewFull(d3_svg) {
        d3_svg.attr("viewBox", this.viewbox.join(" "))
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