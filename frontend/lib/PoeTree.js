class PoeTree {
    constructor(tree_data) {
        this.data = tree_data
        this.groups = new Map(Object.entries(this.data.groups))
        this.nodes = new Map(this.data.nodes.map(function (n) {
            // [key, value]
            return [n.id, new PoeNode(n, tree_data.groups)]
        }))

        /*
         * althogh we get min/max coords they dont include the ascendancy
         * so we do its ourselves
         * could do it via nodes but if we use the groups with the orbits
         * we get a nice padding that could still be not enough if we draw the nodes to big
         */
        this.dimensions = [
            Number.POSITIVE_INFINITY, // min_x
            Number.POSITIVE_INFINITY, // min_y
            Number.NEGATIVE_INFINITY, // max_x
            Number.NEGATIVE_INFINITY  // max_y
        ]

        const max_radius = Math.max(...orbit_radii)
        for (var [_, group] of this.groups) {
            this.dimensions = [
                Math.min(group.x - max_radius, this.dimensions[0]),
                Math.min(group.y - max_radius, this.dimensions[1]),
                Math.max(group.x + max_radius, this.dimensions[2]),
                Math.max(group.y + max_radius, this.dimensions[3])
            ]

        }
    }

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
     * svg viewbox
     * @returns {[min-x,min-y,width,height]}
     */
    get viewbox() {
        return  [
            this.dimensions[0],
            this.dimensions[1],
            this.width,
            this.height
        ]
    }

    get width() {
        return this.dimensions[2] - this.dimensions[0]
    }

    get height() {
        return this.dimensions[3] - this.dimensions[1]
    }

    drawGroups(d3_svg) {
        // group_id => radii of nodes of that group
        var radii = new Map()

        for (var [node_id, node] of this.nodes) {
            if (radii.has(node.group_id)) {
                radii.get(node.group_id).add(node.radius)
            } else {
                radii.set(node.group_id, new Set([node.radius]))
            }
        }

        for (var group_id in this.data.groups) {
            var group = this.data.groups[group_id]
            group_id = +group_id

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
                    .text(group_id)

            for (var r of radii.get(group_id)) {
                d3_svg.append("circle")
                    .attr("r", r)
                    .attr("cx", group.x)
                    .attr("cy", group.y)
                    .attr("class", "group_orbit")
                    .attr("data-orbit-of", group_id)
            }
        }
    }

    drawNodes(d3_svg) {
        for (var [node_id, node] of this.nodes) {
            d3_svg.append("circle")
                .attr("background", node.icon_for_background)
                .attr("r", 40 * node.size)
                .attr("cx", node.x)
                .attr("cy", node.y)
                .attr("class", ["tree_node", ...node.types].join(" "))
                .attr("id", `node_${node_id}`)
                .append("svg:title")
                .text(node.name)
        }
    }

    /**
     * draws the edges between nodes
     *
     * @param d3_svg
     */
    drawEdges(d3_svg, blacklist_fn) {
        if (!blacklist_fn) {
            blacklist_fn = function (source, target) {
                return false
            }
        }

        for (var [node_id, node] of this.nodes) {
            var x1 = node.x
            var y1 = node.y
            for (var adj_id of node.adjacent) {
                var adj = this.nodes.get(adj_id)

                if (!blacklist_fn(node, adj)) {
                    d3_svg.append("line")
                        .attr("class", ["tree_edge", ...node.types, ...adj.types].join(" "))
                        .attr("x1", x1)
                        .attr("y1", y1)
                        .attr("x2", adj.x)
                        .attr("y2", adj.y)
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
}