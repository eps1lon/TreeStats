import Immutable from 'immutable';
export const SHOW_TOOLTIP = 'TOOLTIP/SHOW';

/**
 * creates relevant tt info
 * @param {number} x pos on heatmap
 * @param {number} y
 * @param {number} node_id the hovered node_id
 * @param {Event} event dom event
 * @return {Object} an action
 */
export function showTooltip(x, y, node_id, event) {
  return {
    type: SHOW_TOOLTIP,
    payload: { x, y, node_id, event: Immutable.fromJS(event) },
  };
};
