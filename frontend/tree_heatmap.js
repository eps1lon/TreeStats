/**
 * creates a nedb from a csv file
 * @param filename
 * @returns {Promise}
 */
async function csvToDb(filename) {
    return await PapaParsePromise(filename, {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function (results) {
            const db = new Nedb();

            db.insert(results.data);

            return db;
        }
    });
};

const passive_tree = new PoeTree(passiveSkillTreeData);

let db = csvToDb("../backend/task/get_trees/1483981100685_250_get_trees.csv");

$(document).ready(function () {
    const $heatmap_container = $("#heatmap");
    const tree = drawTreeSvg("passive_tree");

    // adjust heatmap
    tree.then(function ($tree) {
        $heatmap_container.width($tree.width());
        $heatmap_container.height($tree.height());
    })

    // ui
    // display leagues
    for (let [league_id, league] of POE.leagues) {
        $("#leagues").append(`<option value="${league_id}">${league.name}</option>`);
    }

    // display leagues
    for (let [class_id, klass] of POE.classes) {
        $("#classes").append(`<option value="${class_id}">${klass.name}</option>`);
    }

    // event handlers

    // only clickable when db is synced
    db.then(function (db) {
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

            // id like to use await but nedb doesnt support promises
            // and we cant use async functions as dom event handlers
            const rows = db.find(filter, function (e, rows) {
                // clear old
                $("canvas", $heatmap_container).remove();

                // we need to create this here every time
                // reconfiguring the container is not possible
                // and we need to do this since the canvas size
                // is set on create and we need to adjust the
                // size after the tree is set
                const heatmap = h337.create({
                    container: $heatmap_container.get(0),
                    minOpacity: .05,
                    maxOpacity: 0.5
                });

                const aggregate = new NodeAggregation(rows);
                const summarized = aggregate.sum();

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

                // display the data
                heatmap.setData(heatmap_data);

                // explain the data
                $('#tree_stats_header').text(`nodes taken sum heatmap for \
                                          top ${rows.length} public passives \
                                          on ${league_name} ladder`);
            });
        });
    })

    // download heatmap
    $("#download_heatmap").click(function () {
        const data_url = heatmap.getDataURL()

        this.href = data_url
        this.download = "heatmap_breach.png"
    });

    db.then(function () {
        $("#calculate_heatmap").prop("disabled", false);
        $("#calculate_heatmap").click();
    })
});