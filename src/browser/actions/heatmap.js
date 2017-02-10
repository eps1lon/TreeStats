const NodeAggregation = require('../../poe/PassiveNodeAggregation');
import PassiveTreeconf from '../../poe/PassiveTreeConf';
import JavaHashSink from '../../hash_sinks/JavaHashSink';

export const CALCULATE_HEATMAP_DATA = 'CALCULATE_HEATMAP_DATA';
export const EXTREMA_CHANGE = 'EXTREMA_CHANGE';

/**
 * calculates the heatmap from the current state
 * @param {Map} state redux state
 * @return {Object}
 */
export function calculateHeatmap(state) {
  // rows for actual aggregation
  // passive tree for position info
  // tree conf to check if an aggregated value is visible
  const rows = state.get('rows');
  const passive_tree_conf = state.get('passive_tree_conf');
  const passive_tree = state.get('passive_tree');

  const conf = new PassiveTreeconf(passive_tree_conf.toJS());

  const node_filter = (node_id) => {
    const node = passive_tree.nodes.get(node_id);
    // blacklist if not visible
    return !conf.isVisibleNode(node);
  };

  const aggregate = new NodeAggregation(rows.get('rows').toJS());
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

  return {
    type: CALCULATE_HEATMAP_DATA,
    payload: {data, max, hash: hash_sink.hash},
  };
};

/**
 * action creator for extrema change
 *
 * @param {Object} data see
 * https://www.patrick-wied.at/static/heatmapjs/docs.html#h337-create #onExtremaChange
 * @return {Object}
 */
export function extremaChange(data) {
  return {
    type: EXTREMA_CHANGE,
    payload: {
      legend: data,
    },
  };
};
