import {ACTIVATE} from '../actions/nav_tabs';

const initial = {

};

/**
 * @param {Object} state
 * @param {Object} action creator
 * @return {Object} new state
 */
export default function nav_tabs(state = initial, action) {
  switch (action.type) {
  case ACTIVATE:
    return {
      ...state,
      [action.payload.tab_key]: action.payload.key,
    };
  default:
    return state;
  }
}
