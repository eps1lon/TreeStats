export const ZOOM_APP = 'ZOOM_APP';

/**
 * action creator to zoom the app
 * @param {d3-transform} transform
 * @return {object}
 */
export function zoom(transform) {
    return {
        type: ZOOM_APP,
        payload: {transform},
    };
};
