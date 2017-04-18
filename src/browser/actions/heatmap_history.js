import { replaySet } from '../reducers/heatmap';

export const ADD = 'HEATMAP_HISTORY/ADD';
export const CLEAR = 'HEATMAP_HISTORY/CLEAR';
export const FAST_BACKWARD = 'HEATMAP_HISTORY/FAST_BACKWARD';
export const FAST_FORWARD = 'HEATMAP_HISTORY/FAST_FORWARD';
export const STEP_BACKWARD = 'HEATMAP_HISTORY/STEP_BACKWARD';
export const STEP_FORWARD = 'HEATMAP_HISTORY/STEP_FORWARD';
export const PLAY = 'HEATMAP_HISTORY/PLAY';
export const PAUSE = 'HEATMAP_HISTORY/PAUSE';

/**
 * action creator to clear the HEATMAP_HISTORY
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
    if (getState().getIn(['heatmap_history', 'playing'])) {
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


export function addCurrent() {
  return (dispatch, getState) => {
    dispatch({
      type: ADD,
      payload: replaySet(getState().get('heatmap')),
    });
  };
};
