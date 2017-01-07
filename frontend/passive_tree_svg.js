$(document).ready(function (aggregate) {
    var passive_tree = new PoeTree(passiveSkillTreeData)

    var tree_svg = $('#passive_tree')
    var d3_svg = d3.select("#" + tree_svg.attr("id"))

    //tree_svg.width(passive_tree.width)
    //tree_svg.height(passive_tree.height)

    passive_tree.viewFull(d3_svg)

    //*
    passive_tree.drawEdges(d3_svg, function (source, target) {
        // no start node connection
        return source.start || target.start || PoeTree.scionPathOfEdge(source, target)
    })//*/

    passive_tree.drawGroups(d3_svg)
    passive_tree.drawNodes(d3_svg)
})