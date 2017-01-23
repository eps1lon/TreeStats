const $ = require('jquery');
const d3 = require('d3-selection');

const PoeTree = require('./poe/PassiveTree');

// possible PoeTreeDrawer implementations
const CanvasDrawer = require('./poe/TreeDrawer/CanvasDrawer');
const SvgDrawer = require('./poe/TreeDrawer/SvgDrawer');

/**
 * factory
 * 
 * @param ${PoeTree} the passive tree that should be drawn
 * @param ${String} dom selector for the wrapper. should be a unique element 
 *                  otherwise undefined result
 * @param ${Object} configuration data
 */
module.exports = async function (passive_tree, query_selector, user_conf = {}) {
    // the jquery object of the passive tree
    const $tree = $(query_selector);

    /**
     * if a certain tree elem should be drawn
     *
     * this means (isType => drawType) <=> (drawType || !isType)
     *
     * @type {*}
     */
    const conf = Object.assign({
        // default
        start: false,
        scionPathOf: false,
        ascendancy: true,
        mastery: false
    }, user_conf);

    /**
     * @type {PassiveTreeDrawer}
     */
    let tree_drawer;

    const tag_name = $tree.prop('tagName').toLowerCase();
    if (tag_name == "canvas") {
        tree_drawer = new CanvasDrawer(passive_tree, $tree.get(0));
    } else if (tag_name == "svg") {
        tree_drawer = new SvgDrawer(passive_tree, d3.select(query_selector));
    } else  {
        throw `no PoeTreeDrawer implementation for ${tag_name}`;
    }

    // adjust the viewbox
    tree_drawer.viewFull();

    // draw edges
    tree_drawer.drawEdges(function (source, target) {
        // no start node connection
        return (conf.start || !source.start && !target.start)
            // no scion path of x edges
            && (conf.scionPathOf || !PoeTree.scionPathOfEdge(source, target))
            // no ascendancy edges
            && (conf.ascendancy || !source.ascendancy)
    });

    // group orbits
    //tree_drawer.drawGroups();

    // and the actual nodes
    tree_drawer.drawNodes(function (node) {
        return (conf.mastery || !node.mastery)
            && (conf.start || !node.start)
            && (conf.ascendancy || !node.ascendancy)
    });

    const $tt = $('#tree_node_tooltip');

    $('.hover-helper')
        .mouseover(function (event) {
            const node_id = $(this).data('node_id');
            const node = passive_tree.nodes.get(+node_id);

            $tt
                .css({
                    left: event.pageX,
                    top: event.pageY
                })
                .text([node.name, ...node.stats].join('\n'))
                .show();
        })
        .mouseout(function () {
            $tt.hide();
        });

    return $tree;
};