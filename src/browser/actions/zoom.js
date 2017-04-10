export const ZOOMED = 'ZOOM/ZOOMED';
export const RESET_ZOOM = 'ZOOM/RESET';
export const COMMAND_EXECUTED = 'ZOOM/COMMAND_EXECUTED';

/**
 * action creator if the user zoomed
 * @param {d3-transform} transform
 * @return {Object} action
 */
export function zoomed(transform) {
  return {
    type: ZOOMED,
    payload: { transform },
  };
};

/**
 * action creator to reset the zoom
 * @return {Object} action
 */
export function resetZoom() {
  return {
    type: RESET_ZOOM,
  };
};

/**
 * action creator when a command was executed on zhe zoomable
 * @return {Object} action
 */
export function commandExecuted() {
  return {
    type: COMMAND_EXECUTED,
  };
};
