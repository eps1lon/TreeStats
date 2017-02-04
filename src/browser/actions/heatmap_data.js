const NodeAggregation = require('../../poe/PassiveNodeAggregation');
import PassiveTreeconf from '../../poe/PassiveTreeConf';
import JavaHashSink from '../../hash_sinks/JavaHashSink';
import viewboxToTransform from '../../viewboxToTransform';

export const CALCULATE_HEATMAP_DATA = 'CALCULATE_HEATMAP_DATA';

/**
 * calculates the heatmap from the current state
 * @param {Object} state redux state
 * @return {Object}
 */
export function calculateHeatmap(state) {
    // rows for actual aggregation
    // passive tree for position info
    // tree conf to check if an aggregated value is visible
    const {rows, passive_tree_conf, passive_tree, app} = state;
    const transform
        = viewboxToTransform(passive_tree.viewbox, app.width, app.height);

    const conf = new PassiveTreeconf(passive_tree, passive_tree_conf);

    const node_filter = (node_id) => {
        const node = passive_tree.nodes.get(node_id);
        // blacklist if not visible
        return !conf.isVisibleNode(node);
    };

    const aggregate = new NodeAggregation(rows.rows);
    const summarized = aggregate.sum(node_filter);

    // candidate for max value but differences
    // are not recognizeable anymore
    // const passives_taken
    // = Array.from(summarized.values()).reduce((s, v) => s + v, 0);

    // calculate the max
    const max = Math.max(...summarized.values()); // most taken

    // relative to trees which doesnt actually change the image,
    // just doesnt look as dramatic
    // const max = rows.length;

    // hash of the generated values
    const hash_sink = new JavaHashSink();

    // create the data for the heatmaps.js api
    const data = [...summarized].map((entry) => {
        const [node_id, sum] = entry;

        const node = passive_tree.nodes.get(+node_id);

        const datum = {
            x: transform.applyX(node.x)|0,
            y: transform.applyY(node.y)|0,
            value: sum,
        };

        hash_sink.put(...Object.values(datum));

        return datum;
    });

    console.log(data);

    return {
        type: CALCULATE_HEATMAP_DATA,
        payload: {
            heatmap_data: {data, max, hash: hash_sink.hash},
        },
    };
};
