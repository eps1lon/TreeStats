trees = new Promise(function (fulfill) {
    Papa.parse("../backend/task/out/get_trees.csv", {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function (results) {
            fulfill(new NodeAggregation(results.data))
        }
    })
});

const passive_tree = new PoeTree(passiveSkillTreeData);


Promise.all([trees, $(document).ready]).then(function (args) {
    const aggregate = args[0];

    const breach = aggregate.filter(row => row["entry.league"] == "Breach");

    const sum = breach.sum();

    const $heatmap_container = $("#heatmap");

    //noinspection JSUnresolvedVariable
    const heatmap = h337.create({
        container: $heatmap_container.get(0)
    });

    const max = Math.max(...sum.values());
    const data = [...sum].map(function (entry) {
        const [node_id, sum] = entry;

        const node = passive_tree.nodes.get(+node_id);

        return {
            x: passive_tree.xScaled(node.x, $heatmap_container.width()) | 0,
            y: passive_tree.yScaled(node.y, $heatmap_container.height()) | 0,
            value: sum
        }
    });

    const heatmap_data = {
        max: max,
        data: data
    };

    heatmap.setData(heatmap_data)

});