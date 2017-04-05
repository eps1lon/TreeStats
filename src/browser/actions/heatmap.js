import PassiveTreeconf from '../../poe/PassiveTreeConf';

const HeatmapWorker = require('worker-loader!../workers/heatmap.js');
let worker = new HeatmapWorker();

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
 * action creator for the calculation of the heatmap
 * @param {List} rows
 * @param {PassiveTreeConf} conf
 * @param {PassiveTree} passive_tree
 * @return {Object} action
 */
export function calculateHeatmap(rows, conf, passive_tree) {
  return (dispatch) => {
    // stop old calculation
    worker.terminate();
    worker = new HeatmapWorker();

    // give msg handle the dispatch function
    worker.onmessage = onWorkerMessage(dispatch);

    // start calculation
    // web workers can only receive strings to we need to
    // give the message serializeable types
    worker.postMessage({
      rows: rows.toJS(),
      conf: conf.toSerializeable(),
      passive_tree: passive_tree.toSerializeable(),
    });
  };
};

/**
 * @param {Function} dispatch
 * @return {Function} event listener for worker.onmessage
 */
function onWorkerMessage(dispatch) {
  return (message) => {
    dispatch({
      type: CALCULATE_HEATMAP_DATA,
      payload: message.data,
    });
  };
}

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
