export const ADD = 'ANIMATION/ADD';
export const CLEAR = 'ANIMATION/CLEAR';
export const FAST_BACKWARD = 'ANIMATION/FAST_BACKWARD';
export const FAST_FORWARD = 'ANIMATION/FAST_FORWARD';
export const STEP_BACKWARD = 'ANIMATION/STEP_BACKWARD';
export const STEP_FORWARD = 'ANIMATION/STEP_FORWARD';
export const PLAY = 'ANIMATION/PLAY';
export const PAUSE = 'ANIMATION/PAUSE';

/**
 * action creator to add the current heatmap to the animation
 * @return {Object}
 */
export function addCurrent() {
  return (dispatch, getState) => {
    dispatch({
      type: ADD,
      payload: {
        src: getState().getIn(['heatmap', 'data_url']),
      },
    });
  };
};

/**
 * action creator to clear the animation
 * @return {Object}
 */
export function clear() {
  return {
    type: CLEAR,
  };
};

/**
 * action creator to display prev heatmap
 * @return {Object}
 */
export function stepBackward() {
  return {
    type: STEP_BACKWARD,
  };
};

/**
 * action creator to display next heatmap
 * @return {Object}
 */
export function stepForward() {
  return {
    type: STEP_FORWARD,
  };
};

/**
 * action creator to display first heatmap
 * @return {Object}
 */
export function fastBackward() {
  return {
    type: FAST_BACKWARD,
  };
};

/**
 * action creator to display last heatmap
 * @return {Object}
 */
export function fastForward() {
  return {
    type: FAST_FORWARD,
  };
};

/**
 * action creator to toggle play
 * @return {Object}
 */
export function playToggle() {
  return (dispatch, getState) => {
    if (getState().getIn(['animation', 'playing'])) {
      dispatch(pause());
    } else {
      dispatch({ type: PLAY });
    }
  };
};

/**
 * action creator to pause
 * @return {Object}
 */
export function pause() {
  return { type: PAUSE };
}
