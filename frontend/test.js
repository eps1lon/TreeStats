trees = new Promise(function (fulfill, reject) {
    Papa.parse("../backend/task/out/get_trees.csv", {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function (results, file) {
            fulfill(new NodeAggregation(results.data))
        }
    })
})

trees.then(function (aggregate) {
    var breach = aggregate.filter(row => row['entry.league'] == "Breach")
    console.log(breach.sum())

    var passive_tree = new PoeTree(passiveSkillTreeData)

    var tree_svg = $('#passive_tree')
    var d3_svg = d3.select("#" + tree_svg.attr("id"))

    //tree_svg.width(passive_tree.width)
    //tree_svg.height(passive_tree.height)

    passive_tree.viewFull(d3_svg)
    //passive_tree.drawGroups(d3_svg)
    passive_tree.drawNodes(d3_svg)
    //*
    passive_tree.drawEdges(d3_svg, function (source, target) {
        // no start node connection
        return source.start || target.start || PoeTree.scionPathOfEdge(source, target)
    })//*/
})