const passive_tree = new PoeTree(passiveSkillTreeData);

const db = new Nedb();

const db_created = new Promise(function (fulfill) {
    Papa.parse("../backend/task/get_trees/1483981100685_250_get_trees.csv", {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function (results) {
            db.insert(results.data);

            fulfill(db);
        }
    })
});

/**
 * rows with decoded nodes
 *
 * @param rows
 */
const heatmap_data = function (rows) {
    const data = new Map();
};

$(document).ready(function () {
    const $heatmap_container = $("#heatmap");
    const $tree = $("#passive_tree");

    // ui
    // display leagues
    for (let [league_id, league] of POE.leagues) {
        $("#leagues").append(`<option value="${league_id}">${league.name}</option>`);
    }

    // display leagues
    for (let [class_id, klass] of POE.classes) {
        $("#classes").append(`<option value="${class_id}">${klass.name}</option>`);
    }

    // TODO cleanup asnyc pipeline

    // event handlers
    $("#calculate_heatmap").click(function () {
        const filter = {};

        const league_id = $("#leagues").val();
        const league_name = $("#leagues option:selected").text();
        if (league_id) {
            filter.league = +league_id;
        }

        const class_id = $("#classes").val();
        if (class_id) {
            filter.class = +class_id;
        }

        console.log(filter)

        // TODO apply filter
        const rows = db.find(filter, function (e, rows) {
            const aggregate = new NodeAggregation(rows);
            const summarized = aggregate.sum();

            // adjust width
            $heatmap_container.width($tree.width());
            $heatmap_container.height($tree.height());

            // clear old
            $("canvas", $heatmap_container).remove()

            // heatmap config
            // TODO use configure when tree hast changes
            // and create instance on app init
            //noinspection JSUnresolvedVariable
            const heatmap = h337.create({
                container: $heatmap_container.get(0),
                minOpacity: .05,
                maxOpacity: 0.5
            });

            // calculate the max
            const max = Math.max(...summarized.values());

            // create the data for the heatmaps.js api
            const data = [...summarized].map(function (entry) {
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

            // adjust the heatmap to match the underlying tree
            // FIXME still heatmap fails and says its zero
            $heatmap_container.width($tree.width());
            $heatmap_container.height($tree.height());

            // display the data
            heatmap.setData(heatmap_data);

            // explain the data
            $('#tree_stats_header').text(`nodes taken sum heatmap for \
                                          top TODO public passives \
                                          on ${league_name} ladder`);
        });
    });

    // download heatmap
    $("#download_heatmap").click(function () {
        const data_url = heatmap.getDataURL()

        this.href = data_url
        this.download = "heatmap_breach.png"
    });

    db_created.then(function () {
        $("#calculate_heatmap").prop("disabled", false);
        $("#calculate_heatmap").click();
    })
});