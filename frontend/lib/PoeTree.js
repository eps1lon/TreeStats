class PoeTree {

    constructor(tree_data) {
        this.data = tree_data
        this.nodes = new Map(this.data.nodes.map(n => [n.id, new PoeNode(n, tree_data.groups)]))

        console.log(this.nodes)
    }

    /**
     * svg viewbox
     * @returns {[min-x,min-y,width,height]}
     */
    get viewbox() {
        return  [
            this.data.min_x,
            this.data.min_y,
            this.width,
            this.height
        ]
    }

    get width() {
        return this.data.max_x - this.data.min_x
    }

    get height() {
        return this.data.max_y - this.data.min_y
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
     * adjusts the viewBox so that we can see everything
     * @param d3_svg
     */
    viewFull(d3_svg) {
        d3_svg.attr("viewBox", this.viewbox.join(" "))
    }
}