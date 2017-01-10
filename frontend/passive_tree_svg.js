const drawTreeSvg = async function (id) {
    // the jquery object of the passive tree
    const $tree_svg = $(`#${id}`);
    // the d3 object of the passive tree
    const d3_svg = d3.select("#" + $tree_svg.attr("id"));

    //$tree_svg.width(passive_tree.width)
    //$tree_svg.height(passive_tree.height)

    // adjust the viewbox
    passive_tree.viewFull(d3_svg);

    // draw edges
    passive_tree.drawEdges(d3_svg, function (source, target) {
        // no start node connection
        return source.start || target.start
            // no scion path of x edges
            || PoeTree.scionPathOfEdge(source, target)
            // no ascendancy edges
            || source.ascendancy
    });

    // group orbits
    //passive_tree.drawGroups(d3_svg);

    // and the actual nodes
    passive_tree.drawNodes(d3_svg, function (node) {
        return node.mastery || node.start || node.ascendancy
    });

    return $tree_svg;
};