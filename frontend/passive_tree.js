const drawTree = async function (query_selector, user_conf = {}) {
    // the jquery object of the passive tree
    const $tree = $(query_selector);

    /**
     * if a certain tree elem should be drawn
     *
     * this means (isType => drawType) <=> (drawType || !isType)
     *
     * @type {*}
     */
    const conf = Object.assign({
        // default
        start: false,
        scionPathOf: false,
        ascendancy: true,
        mastery: false
    }, user_conf);

    /**
     * @type {PoeTreeDrawer}
     */
    let tree_drawer;

    if ($tree.prop("tagName") == "CANVAS") {
        tree_drawer = new CanvasDrawer(passive_tree, $tree.get(0));
    } else if ($tree.prop("tagName") == "SVG") {
        tree_drawer = new SvgDrawer(passive_tree, d3.select("#" + $tree_svg.attr("id")));
    } else  {
        throw `no PoeTreeDrawer implementation for ${$tree.prop("tagName")}`;
    }

    // adjust the viewbox
    tree_drawer.viewFull();

    // draw edges
    tree_drawer.drawEdges(function (source, target) {
        // no start node connection
        return (conf.start || !source.start && !target.start)
            // no scion path of x edges
            && (conf.scionPathOf || !PoeTree.scionPathOfEdge(source, target))
            // no ascendancy edges
            && (conf.ascendancy || !source.ascendancy)
    });

    // group orbits
    //tree_drawer.drawGroups();

    // and the actual nodes
    tree_drawer.drawNodes(function (node) {
        return (conf.mastery || !node.mastery)
            && (conf.start || !node.start)
            && (conf.ascendancy || !node.ascendancy)
    });

    return $tree;
};