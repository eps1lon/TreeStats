/**
 * creates a nedb from a csv file
 * @param filename
 * @returns {Promise}
 */
const csvToDb = async function (filename) {
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

const csv_file_development = "../backend/task/get_trees/1484038613856_250_get_trees.csv";
let csv_file_production = "../backend/task/get_trees/1483973137391_250_get_trees.csv";

let db = csvToDb(csv_file_production);

$(document).ready(function () {
    /**
     * updates the legend for the heatmap
     * @see {https://www.patrick-wied.at/static/heatmapjs/example-legend-tooltip.html}
     *
     * @param data the heatmap data
     */
    const updateHeatmapLegend = (function (gradient_query_selector) {
        const legendCanvas = document.createElement('canvas');
        legendCanvas.width = 100;
        legendCanvas.height = 10;

        const gradientImg = document.querySelector(gradient_query_selector);
        let legendCtx = legendCanvas.getContext('2d');
        let gradientCfg = {};

        return function (data) {
            // the onExtremaChange callback gives us min, max, and the gradientConfig
            // so we can update the legend
            $("#heatmap_min").text(data.min);
            $("#heatmap_max").text(data.max);

            // regenerate gradient image
            if (data.gradient != gradientCfg) {
                gradientCfg = data.gradient;
                var gradient = legendCtx.createLinearGradient(0, 0, 100, 1);
                for (var key in gradientCfg) {
                    gradient.addColorStop(key, gradientCfg[key]);
                }
                legendCtx.fillStyle = gradient;
                legendCtx.fillRect(0, 0, 100, 10);
                gradientImg.src = legendCanvas.toDataURL();
            }
        };
    })('#heatmap_legend img');

    // busy indicators
    const heatmap_indicator = new BusyIndicator("#heatmap_conf input[type='submit']");
    const tree_indicator = new BusyIndicator("#tree_conf input[type='submit']");
    const db_indicator = new BusyIndicator("#filter input[type='submit']");

    // TODO add opcity, jquerify
    const $heatmap_container = $("#heatmap");

    // draw tree
    tree_indicator.busy();
    const tree = drawTree(".passive_tree:visible");

    // adjust heatmap
    tree.then(function ($tree) {
        $heatmap_container.width($tree.width());
        $heatmap_container.height($tree.height());

        tree_indicator.ready();
    });

    db.then(function () {
        $("#heatmap_calculate").click();
    });

    // ui
    // display leagues
    for (let [league_id, league] of POE.leagues) {
        $("#filter_leagues").append(`<option value="${league_id}">${league.name}</option>`);
    }

    // display leagues
    for (let [class_id, klass] of POE.classes) {
        $("#filter_classes").append(`<option value="${class_id}">${klass.name}</option>`);
    }

    // the cursor to the rows
    let data_cursor = null;

    // the calculated data from the cursor for the heatmap
    let heatmap_data = {};

    // event handlers
    // fetches the data and calculates the heatmap_data
    $("#heatmap_calculate").click(function () {
        db_indicator.busy();

        const filter = {};

        const league_id = $("#filter_leagues").val();
        const league_name = $("#filter_leagues option:selected").text();
        if (league_id) {
            filter.league = +league_id;
        }

        const class_id = $("#filter_classes").val();
        if (class_id) {
            filter.class = +class_id;
        }

        // id like to use await but nedb doesnt support promises
        // and we cant use async functions as dom event handlers
        db.then(function (rows) {
            data_cursor = rows
                .find(filter)
                .sort({xp: -1})
                .limit(+$("#filter_limit").val())
                .skip(+$("#filter_offset").val());

            data_cursor.exec(function (e, rows) {
                db_indicator.ready();

                const aggregate = new NodeAggregation(rows);
                // TODO blacklist by looking at displayed nodes
                const summarized = aggregate.sum(function (node_id) {
                    const node = passive_tree.nodes.get(node_id);
                    if (node) {
                        // skip ascendancies
                        return node.ascendancy;
                    }
                    return false;
                });

                // candidate for max value but differences are not recognizeable anymore
                //const passives_taken = Array.from(summarized.values()).reduce((s, v) => s + v, 0);

                // calculate the max
                const max = Math.max(...summarized.values()); // most taken

                // relative to trees which doesnt actually change the image, just doesnt look as dramatic
                //const max = rows.length;

                // create the data for the heatmaps.js api
                const data = [...summarized].map(function (entry) {
                    const [node_id, sum] = entry;

                    const node = passive_tree.nodes.get(+node_id);

                    if (!node) {
                        console.log(node_id);
                        console.log(sum)
                    }

                    return {
                        x: passive_tree.xScaled(node.x, $heatmap_container.width()) | 0,
                        y: passive_tree.yScaled(node.y, $heatmap_container.height()) | 0,
                        value: sum
                    }
                });

                // update the heatmap data
                heatmap_data = {
                    max: max,
                    data: data
                };

                // and draw
                $("#heatmap_redraw").click();

                // explain the data
                $('#tree_stats_header').text(`nodes taken sum heatmap for \
                                              top ${rows.length} public passives \
                                              on ${league_name} ladder`);
            });
        })
    });

    // draw heatmap
    $("#heatmap_redraw").click(function () {
        heatmap_indicator.busy();

        // clear old
        $(".heatmap-canvas", $heatmap_container).remove();

        // we need to create this here every time
        // reconfiguring the container is not possible
        // and we need to do this since the canvas size
        // is set on create and we need to adjust the
        // size after the tree is set
        const heatmap = h337.create({
            container: $heatmap_container.get(0),
            minOpacity: $("#heatmap_min_opacity").val() / 100,
            maxOpacity: $("#heatmap_max_opacity").val() / 100,
            radius: $("#heatmap_radius").val(),
            blur: $("#heatmap_blur").val() / 100,
            onExtremaChange: updateHeatmapLegend
        });

        // display the data
        heatmap.setData(heatmap_data);
        heatmap_indicator.ready();
    });

    // download heatmap
    $("#download_heatmap").click(function () {
        this.href = heatmap.getDataURL();
        this.download = "heatmap_breach.png"
    });

    // data filter
    $("#filter input, #filter select").change(function () {
        if (!db_indicator.is_busy && $('#filter_submit_onchange').prop("checked")) {
            $("#heatmap_calculate").click();
        }
    });

    // heatmap conf
    $("#heatmap_conf input, #heatmap_conf select").change(function () {
        if (!heatmap_indicator.is_busy && $("#heatmap_submit_onchange").prop("checked")) {
            $("#heatmap_redraw").click();
        }
    });
});