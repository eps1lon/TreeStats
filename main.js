// deps
const BusyIndicator = require('./src/BusyIndicator');

// Poe deps
const PoeTree = require('./src/poe/PassiveTree');
const POE = require('./src/poe/data');
const tree_data = require(`./src/tree/${POE.current_tree}/tree`);

// func deps
const csvToDb = require('./src/csvToDb');
const drawTree = require('./src/drawTree');
const calculateHeatmapData = require('./src/calculateHeatmapData');

// ext deps
const $ = require('jquery');
const h337 = require('heatmap.js');

// instanciation
const passive_tree = new PoeTree(tree_data.passiveSkillTreeData);

const csv_file_development = './task/get_trees/example_small.csv';
// let csv_file_production = './task/get_trees/example_big.csv';

let db = csvToDb(csv_file_development);

$(document).ready(function() {
    /**
     * updates the legend for the heatmap
     * @see {https://www.patrick-wied.at/static/heatmapjs/example-legend-tooltip.html}
     *
     * @param data the heatmap data
     */
    const updateHeatmapLegend = (function(gradient_query_selector) {
        const legendCanvas = document.createElement('canvas');
        legendCanvas.width = 100;
        legendCanvas.height = 10;

        const gradientImg = document.querySelector(gradient_query_selector);
        let legendCtx = legendCanvas.getContext('2d');
        let gradientCfg = {};

        return function(data) {
            // the onExtremaChange callback gives us min, max, and
            // the gradientConfig so we can update the legend
            $('#heatmap_min').text(data.min);
            $('#heatmap_max').text(data.max);

            // regenerate gradient image
            if (data.gradient != gradientCfg) {
                gradientCfg = data.gradient;
                const gradient = legendCtx.createLinearGradient(0, 0, 100, 1);
                for (const key of Object.keys(gradientCfg)) {
                    gradient.addColorStop(key, gradientCfg[key]);
                }
                legendCtx.fillStyle = gradient;
                legendCtx.fillRect(0, 0, 100, 10);
                gradientImg.src = legendCanvas.toDataURL();
            }
        };
    })('#heatmap_legend img');

    // busy indicators
    const heatmap_indicator
        = new BusyIndicator('#heatmap_conf input[type="submit"]');
    const tree_indicator
        = new BusyIndicator('#tree_conf input[type="submit"]');
    const db_indicator
        = new BusyIndicator('#filter input[type="submit"]');

    // TODO add opcity, jquerify
    const $heatmap_container = $('#heatmap');

    // ui
    // display leagues
    for (let [league_id, league] of POE.leagues) {
        $('#filter_leagues')
            .append(`<option value="${league_id}">${league.name}</option>`);
    }

    // display leagues
    for (let [class_id, klass] of POE.classes) {
        $('#filter_classes')
            .append(`<option value="${class_id}">${klass.name}</option>`);
    }

    // the calculated data from the cursor for the heatmap
    let heatmap_data = {
        max: 0,
        data: [],
    };

    // the passive tree drawer
    let tree = null;

    // event handlers
    // fetches the data and calculates the heatmap_data
    $('#heatmap_calculate').click(function() {
        db_indicator.busy();

        const filter = {};

        const league_id = $('#filter_leagues').val();
        const league_name = $('#filter_leagues option:selected').text();
        if (league_id) {
            filter.league = +league_id;
        }

        const class_id = $('#filter_classes').val();
        if (class_id) {
            filter.class = +class_id;
        }

        const active_since = $('#filter_last_active').val();
        if (active_since) {
            filter.last_active = {
                $gte: new Date(active_since).valueOf(),
            };
        }

        const draw_ascendancies = $('#tree_show_ascendancies').is(':checked');

        calculateHeatmapData(passive_tree, db, {
            filter: filter,
            limit: +$('#filter_limit').val(),
            offset: +$('#filter_offset').val(),
            sum_blacklist_fn: (node_id) => {
                const node = passive_tree.nodes.get(node_id);
                if (node) {
                    // skip ascendancies
                    return !draw_ascendancies && node.ascendancy;
                }
                return false;
            },
        })
        // id like to use await but we cant use
        // async functions as dom event handlers
        .then((new_heatmap_data) => {
            db_indicator.ready();
            console.log(new_heatmap_data);

            heatmap_data = new_heatmap_data;

            // and draw
            $('#heatmap_redraw').click();

            // explain the data
            $('#tree_stats_header')
                .text(`nodes taken sum heatmap for \
                        top ${heatmap_data.tally} public passives \
                        on ${league_name} ladder`);
        });
    });

    // draw heatmap
    $('#heatmap_redraw').click(function() {
        heatmap_indicator.busy();

        // clear old
        $('.heatmap-canvas', $heatmap_container).remove();

        // we need to create this here every time
        // reconfiguring the container is not possible
        // and we need to do this since the canvas size
        // is set on create and we need to adjust the
        // size after the tree is set
        const heatmap = h337.create({
            container: $heatmap_container.get(0),
            minOpacity: $('#heatmap_min_opacity').val() / 100,
            maxOpacity: $('#heatmap_max_opacity').val() / 100,
            radius: $('#heatmap_radius').val(),
            blur: $('#heatmap_blur').val() / 100,
            onExtremaChange: updateHeatmapLegend,
        });

        // display the data
        heatmap.setData({
            max: heatmap_data.max,
            data: heatmap_data.data.map((d) => {
                return Object.assign({}, d, {
                    x: passive_tree.xScaled(d.x, $heatmap_container.width()) |0,
                    y: passive_tree.yScaled(d.y, $heatmap_container.height())|0,
                });
            }),
        });

        heatmap_indicator.ready();
    });

    // draw tree
    $('#tree_redraw').click(function() {
        tree_indicator.busy();
        tree = drawTree(passive_tree, '.passive_tree.draw-target', {
            ascendancy: $('#tree_show_ascendancies').is(':checked'),
        });

        // adjust heatmap
        tree.then(function($tree) {
            $heatmap_container.width($tree.width());
            $heatmap_container.height($tree.height());

            tree_indicator.ready();

            db.then(function() {
                $('#heatmap_redraw').click();
            });
        });
    });

    // download heatmap
    $('#download_heatmap').click(function() {
        this.href = heatmap.getDataURL();
        this.download = 'heatmap_breach.png';
    });

    // data filter
    $('#filter input, #filter select').change(function() {
        if (!db_indicator.is_busy
            && $('#filter_submit_onchange').prop('checked')) {
            $('#heatmap_calculate').click();
        }
    });

    // heatmap conf
    $('#heatmap_conf input, #heatmap_conf select').change(function() {
        if (!heatmap_indicator.is_busy
                && $('#heatmap_submit_onchange').prop('checked')) {
            $('#heatmap_redraw').click();
        }
    });

    // tree conf
    $('#tree_conf input, #tree_conf select').change(function() {
        if (!tree_indicator.is_busy
            && $('#tree_submit_onchange').prop('checked')) {
            $('#tree_redraw').click();
        }
    });

    // init
    // thats actually a pretty dirty parallel task
    // tree is drawing and on complete redrawing the heatmap
    // while its data is still being calculated in #heatmap_calculate.click
    // solution would be to extract every async part into an
    // actual async function and let it run thenified in the event handlers
    $('#tree_redraw').click();
    $('#heatmap_calculate').click();
});
