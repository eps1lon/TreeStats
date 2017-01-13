const drawTree = async function (query_selector) {
    // the jquery object of the passive tree
    const $tree = $(query_selector);

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
        return !source.start && !target.start
            // no scion path of x edges
            && !PoeTree.scionPathOfEdge(source, target)
            // no ascendancy edges
            && !source.ascendancy
    });

    // group orbits
    //tree_drawer.drawGroups();

    // and the actual nodes
    tree_drawer.drawNodes(function (node) {
        return !node.mastery && !node.start && !node.ascendancy
    });

    return $tree;
};