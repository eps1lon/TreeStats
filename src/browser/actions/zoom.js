export const ZOOMED = 'ZOOMED';
export const RESET_ZOOM = 'RESET_ZOOM';

/**
 * action creator if the user zoomed
 * @param {d3-transform} transform
 * @return {Object} action
 */
export function zoomed(transform) {
    return {
        type: ZOOMED,
        payload: {transform},
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
