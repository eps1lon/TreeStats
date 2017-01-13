class SvgDrawer extends PoeTreeDrawer {
    constructor(passive_tree, d3_svg) {
        super(passive_tree);

        this.d3_svg = d3_svg;
    }

    drawNodes(nodes_cb) {
        for (const [node_id, node] of this.nodesDrawn(nodes_cb)) {
            this.d3_svg.append("circle")
                .attr("r", node.size * 2)
                .attr("cx", node.x)
                .attr("cy", node.y)
                .attr("class", ["tree_node", ...node.types].join(" "))
                .attr("id", `node_${node_id}`)
                .append("svg:title")
                .text([node.name, ...node.stats].join("\n"));
        }
    }

    drawGroups(groups_cb) {
        // group_id => radii of nodes of that group
        let radii = new Map();

        for (let node of this.tree.nodes.values()) {
            if (radii.has(node.group_id)) {
                radii.get(node.group_id).add(node.radius)
            } else {
                radii.set(node.group_id, new Set([node.radius]))
            }
        }

        for (const [group_id, group] of this.groupsDrawn(groups_cb)) {
            if (!radii.has(group_id)) {
                radii.set(group_id, [0])
            }

            this.d3_svg.append("circle")
                .attr("r", Math.max(...radii.get(group_id)))
                .attr("cx", group.x)
                .attr("cy", group.y)
                .attr("class", "tree_group")
                .attr("id", `node_group_${group_id}`)
                .append("svg:title")
                .text(group_id);

            for (const r of radii.get(group_id)) {
                this.d3_svg.append("circle")
                    .attr("r", r)
                    .attr("cx", group.x)
                    .attr("cy", group.y)
                    .attr("class", "group_orbit")
                    .attr("data-orbit-of", group_id)
            }
        }
    }

    drawEdges(edges_cb) {
        for (const [node, adj] of this.edgesDrawn(edges_cb)) {
            const class_names = ["tree_edge", ...node.types, ...adj.types];

            // same orbit and same group
            if (node.orbit == adj.orbit && node.group_id == adj.group_id) {
                this.d3_svg.append("path")
                    .attr("class", class_names.join(" "))
                    .attr("d", SvgDrawer.describeArc(node, adj))
                    .attr("fill", "none");//*/
            } else {
                this.d3_svg.append("line")
                    .attr("class", class_names.join(" "))
                    .attr("x1", node.x)
                    .attr("y1", node.y)
                    .attr("x2", adj.x)
                    .attr("y2", adj.y)
            }
        }
    }

    viewFull() {
        this.d3_svg.attr("viewBox", this.tree.viewbox.join(" "))
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
}