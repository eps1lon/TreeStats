class CanvasDrawer extends PoeTreeDrawer {
    constructor(passive_tree, canvas) {
        super(passive_tree);

        this.canvas = canvas;
    }

    /**
     *
     * @returns {CanvasRenderingContext2D|WebGLRenderingContext}
     */
    get ctx() {
        return this.canvas.getContext("2d");
    }

    get width() {
        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }

    xScaled(x) {
        return this.tree.xScaled(x, this.width)
    }

    yScaled(y) {
        return this.tree.yScaled(y, this.height)
    }

    rScaled(r) {
        return r * this.width / this.tree.width;
    }

    drawEdges(edges_cb) {
        for (const [node, adj] of this.edgesDrawn(edges_cb)) {
            this.ctx.beginPath();

            // same orbit and same group
            if (node.orbit == adj.orbit && node.group_id == adj.group_id) {
                this.drawArc(node, adj);
            } else {
                this.ctx.moveTo(this.xScaled(node.x), this.yScaled(node.y));
                this.ctx.lineTo(this.xScaled(adj.x), this.yScaled(adj.y));
            }

            this.ctx.stroke();
            this.ctx.closePath();
        }
    }

    drawGroups(groups_cb) {
        // group_id => radii of nodes of that group
        const radii = this.radii;

        for (const [group_id, group] of this.groupsDrawn(groups_cb)) {
            if (!radii.has(group_id)) {
                radii.set(group_id, [0]);
            }

            this.ctx.beginPath();

            this.ctx.arc(this.xScaled(group.x), this.yScaled(group.y)
                        , this.rScaled(Math.max(...radii.get(group_id)))
                        , 0, 2 * Math.PI);

            this.ctx.stroke();
            this.ctx.closePath();

            for (const r of radii.get(group_id)) {
                this.ctx.beginPath();
                // Array(2).fill(2 * Math.PI * this.rScaled(r) / skills_per_orbit[orbit_radii.indexOf(r)])
                this.ctx.setLineDash([1, 5]);

                this.ctx.arc(this.xScaled(group.x), this.yScaled(group.y)
                            , this.rScaled(r)
                            , 0, 2 * Math.PI);

                this.ctx.stroke();
                this.ctx.closePath();
            }
        }
    }

    drawNodes(nodes_cb) {
        for (const [_, node] of this.nodesDrawn(nodes_cb)) {
            this.ctx.beginPath();
            this.ctx.fillStyle = "red";

            this.ctx.arc(this.xScaled(node.x), this.yScaled(node.y),
                         this.rScaled(node.size), 0, 2 * Math.PI);

            this.ctx.stroke();
            this.ctx.fill();
            this.ctx.closePath();
        }
    }

    /**
     * stretches the canvas to fill its parent while preserving the tree ratio
     * clears the canvas so call first
     */
    viewFull() {
        const wrapper = $(this.canvas).parent();
        const scale = Math.max(wrapper.width() / this.tree.width
                             , wrapper.height() / this.tree.height );

        this.canvas.width = this.tree.width * scale;
        this.canvas.height = this.tree.height * scale;
    }

    drawArc(node, adj) {
        const tau = 2 * Math.PI;

        let [start_angle, end_angle] = [node.angle_clockwise, adj.angle_clockwise];


        if (start_angle > end_angle){
            [start_angle, end_angle] = [end_angle, start_angle]
        }

        if (end_angle - start_angle > tau) {
            end_angle = tau - Number.EPSILON;
        }

        const counter_clockwise = end_angle - start_angle > Math.PI;

        this.ctx.arc(this.xScaled(node.group.x), this.yScaled(node.group.y)
                    , this.rScaled(node.radius), start_angle, end_angle
                    , counter_clockwise);
    }
}