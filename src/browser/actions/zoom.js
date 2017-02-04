export const ZOOMED = 'ZOOMED';

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
