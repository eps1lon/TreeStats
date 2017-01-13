const drawTreeSvg = async function (id) {
    // the jquery object of the passive tree
    const $tree_svg = $(`#${id}`);
    // the d3 object of the passive tree
    const d3_svg = d3.select("#" + $tree_svg.attr("id"));

    const tree_drawer = new SvgDrawer(passive_tree, d3_svg);

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

    return $tree_svg;
};