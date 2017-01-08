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
    // the jquery object of the passive tree
    const $tree_svg = $('#passive_tree');
    // the d3 object of the passive tree
    const d3_svg = d3.select("#" + $tree_svg.attr("id"));

    //$tree_svg.width(passive_tree.width)
    //$tree_svg.height(passive_tree.height)

    // adjust the viewbox
    passive_tree.viewFull(d3_svg);

    // draw edges
    passive_tree.drawEdges(d3_svg, function (source, target) {
        // no start node connection, no scion path of x edges
        return source.start || target.start || PoeTree.scionPathOfEdge(source, target)
    });

    // group orbits
    passive_tree.drawGroups(d3_svg);

    // and the actual nodes
    passive_tree.drawNodes(d3_svg);

    /**
     * @type {NodeAggregation}
     */
    const aggregate = args[0];

    const league_name = "Hardcore Breach"
    /**
     * all passives of the X league
     *
     * @type {NodeAggregation}
     */
    const league = aggregate.filter(row => row["entry.league"] == league_name);

    // sum the the used nodes
    const league_sum = league.sum();

    const $heatmap_container = $("#heatmap");

    // adjust the heatmap to match the underlying tree
    $heatmap_container.width($tree_svg.width());
    $heatmap_container.height($tree_svg.height());

    // heatmap config
    //noinspection JSUnresolvedVariable
    const heatmap = h337.create({
        container: $heatmap_container.get(0),
        minOpacity: .05,
        maxOpacity: 0.5
    });


    const max = Math.max(...league_sum.values());

    // create the data for the heatmaps.js api
    const data = [...league_sum].map(function (entry) {
        const [node_id, sum] = entry;

        const node = passive_tree.nodes.get(+node_id);

        if (!node) {
            console.log(node_id)
            console.log(sum)
        }

        return {
            x: passive_tree.xScaled(node.x, $heatmap_container.width()) | 0,
            y: passive_tree.yScaled(node.y, $heatmap_container.height()) | 0,
            value: sum
        }
    });

    // object for heatmap.setData
    const heatmap_data = {
        max: max,
        data: data
    };

    // display the data
    heatmap.setData(heatmap_data)

    // explain the data
    $('#tree_stats_header').text(`nodes taken sum heatmap for top ${league.rows.length} public passives on ${league_name} ladder`)

    // event handlers
    // download heatmap
    $("#download_heatmap").click(function () {
        const data_url = heatmap.getDataURL()

        this.href = data_url
        this.download = "heatmap_breach.png"
    })
});