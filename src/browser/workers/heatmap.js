const NodeAggregation = require('../../poe/PassiveNodeAggregation');
import JavaHashSink from '../../hash_sinks/JavaHashSink';

/**
 * calculates the heatmap from the sum aggregation of the nodes in rows
 * @param {Object[]} rows
 * @param {PassiveTreeConf} conf
 * @param {PassiveTree} passive_tree
 * @return {Object} action
 */
export function calculateHeatmap(rows, conf, passive_tree) {
  const node_filter = (node_id) => {
    const node = passive_tree.nodes.get(node_id);
    // some passives in the standard league are no more found
    // in todays passive tree
    // => hide legacy nodes
    if (node === undefined) {
      return true;
    }
    // blacklist if not visible
    return !conf.isVisibleNode(node);
  };

  const aggregate = new NodeAggregation(rows);
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
      x: node.x,
      y: node.y,
      value: sum,
    };

    hash_sink.put(...Object.values(datum));

    return datum;
  });

  return { data, max, hash: hash_sink.hash };
};
