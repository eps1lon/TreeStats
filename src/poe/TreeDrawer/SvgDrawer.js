const PassiveTreeDrawer = require('../PassiveTreeDrawer');

module.exports = class SvgDrawer extends PassiveTreeDrawer {
    /**
     * @constructor
     * @param {!PassiveTree} passive_tree
     * @param {!D3Selection} d3_selection
     */
    constructor(passive_tree, d3_selection) {
        super(passive_tree);

        this.d3_svg = d3_selection;
    }

    /**
     * draws the nodes onto the d3 selection
     *
     * @param {function} nodes_cb
     */
    drawNodes(nodes_cb) {
        for (const [node_id, node] of this.nodesDrawn(nodes_cb)) {
            this.d3_svg.append('circle')
                .attr('r', node.size * 1.5)
                .attr('cx', node.x)
                .attr('cy', node.y)
                .attr('class', ['tree_node', ...node.types].join(' '));

            // larger circle for easier hover
            this.d3_svg.append('circle')
                .attr('r', node.size * 3)
                .attr('cx', node.x)
                .attr('cy', node.y)
                .attr('class', [
                    'tree_node', 'hover-helper',
                    ...node.types,
                ].join(' '))
                .attr('id', `node_${node_id}`)
                .attr('data-node_id', node_id);
        }
    }

    /**
     * draws the groups onto the d3 selection
     *
     * @param {function} groups_cb gets passed the group, return true if drawn
     */
    drawGroups(groups_cb) {
        // group_id => radii of nodes of that group
        const radii = this.radii;

        for (const [group_id, group] of this.groupsDrawn(groups_cb)) {
            if (!radii.has(group_id)) {
                radii.set(group_id, [0]);
            }

            this.d3_svg.append('circle')
                .attr('r', Math.max(...radii.get(group_id)))
                .attr('cx', group.x)
                .attr('cy', group.y)
                .attr('class', 'tree_group')
                .attr('id', `node_group_${group_id}`)
                .append('svg:title')
                .text(group_id);

            for (const r of radii.get(group_id)) {
                this.d3_svg.append('circle')
                    .attr('r', r)
                    .attr('cx', group.x)
                    .attr('cy', group.y)
                    .attr('class', 'group_orbit')
                    .attr('data-orbit-of', group_id);
            }
        }
    }

    /**
     * @param {function} edges_cb gets node, adj passed, return true if drawn
     */
    drawEdges(edges_cb) {
        for (const [node, adj] of this.edgesDrawn(edges_cb)) {
            const class_names = ['tree_edge', ...node.types, ...adj.types];

            // same orbit and same group
            if (node.orbit == adj.orbit && node.group_id == adj.group_id) {
                this.d3_svg.append('path')
                    .attr('class', class_names.join(' '))
                    .attr('d', SvgDrawer.describeArc(node, adj))
                    .attr('fill', 'none');
            } else {
                this.d3_svg.append('line')
                    .attr('class', class_names.join(' '))
                    .attr('x1', node.x)
                    .attr('y1', node.y)
                    .attr('x2', adj.x)
                    .attr('y2', adj.y);
            }
        }
    }

    /**
     * adjust viewbox to the passive tree
     */
    viewFull() {
        this.d3_svg.attr('viewBox', this.tree.viewbox.join(' '));
    }

    /**
     * computes a svg path for an arc between 2 nodes
     * @param {PassiveNode} start
     * @param {PassiveNode} end
     * @return {string}
     */
    static describeArc(start, end) {
        const x = start.group.x;
        const y = start.group.y;
        const r = start.radius;
        const tau = 2 * Math.PI;

        let start_angle = start.angle;
        let end_angle = end.angle;

        if (start_angle > end_angle) {
            [start_angle, end_angle] = [end_angle, start_angle];
        }

        if (end_angle - start_angle > tau) {
            end_angle = tau - Number.EPSILON;
        }

        let sweep = 0;
        if (end_angle - start_angle > Math.PI) {
            sweep = 1;
        }

        return [
            'M', x + Math.cos(start_angle) * r, y - (Math.sin(start_angle) * r),
            'A', r, r, 0, 0, sweep,
            x + Math.cos(end_angle) * r, y - (Math.sin(end_angle) * r),
        ].join(' ');
    }
};
