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

var passive_tree = new PoeTree(passiveSkillTreeData)


Promise.all([trees, $(document).ready]).then(function (args) {
    var aggregate = args[0]

    var breach = aggregate.filter(row => row["entry.league"] == "Breach")

    var sum = breach.sum()

    var $heatmap_container = $("#heatmap")

    var heatmap = h337.create({
        container: $heatmap_container.get(0)
    });

    var max = Math.max(...sum.values())
    var data = [...sum].map(function (entry) {
        var [node_id, sum] = entry

        var node = passive_tree.nodes.get(+node_id)

        return {
            x: passive_tree.xScaled(node.x, $heatmap_container.width()) | 0,
            y: passive_tree.yScaled(node.y, $heatmap_container.height()) | 0,
            value: sum
        }
    })

    heatmap_data = {
        max: max,
        data: data
    }

    heatmap.setData(heatmap_data)

})