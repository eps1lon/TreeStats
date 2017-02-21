const NodeAggregation = require('../../poe/PassiveNodeAggregation');
import PassiveTreeconf from '../../poe/PassiveTreeConf';
import JavaHashSink from '../../hash_sinks/JavaHashSink';

export const CALCULATE_HEATMAP_DATA = 'HEATMAP/CALCULATE_DATA';
export const EXTREMA_CHANGE = 'HEATMAP/EXTREMA_CHANGE';

// rrf form models that are relevant to the heatmap calculation
// in calculateHeatmap()
export const HEATMAP_RELEVANT_CONF = [
  'passive_tree_conf.group_orbits',
  'passive_tree_conf.start',
  'passive_tree_conf.scionPathOf',
  'passive_tree_conf.ascendancy',
  'passive_tree_conf.mastery',
];

/**
 * @param {Immutable.Map} state redux state tree
 * @return {Object} @see {calculateHeatmap}
 */
export const calculateHeatmapFromState = (state) => {
  const rows = state.getIn(['rows', 'rows']);
  const passive_tree_conf = state.get('passive_tree_conf');
  const passive_tree = state.get('passive_tree');

  const conf = new PassiveTreeconf(passive_tree_conf.toJS());

  return calculateHeatmap(rows, conf, passive_tree);
};

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

  return {
    type: CALCULATE_HEATMAP_DATA,
    payload: { data, max, hash: hash_sink.hash },
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
