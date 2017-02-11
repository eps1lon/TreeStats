import { Map } from 'immutable';
import { ACTIVATE } from '../actions/nav_tabs';

const initial = Map();

/**
 * @param {Object} state
 * @param {Object} action creator
 * @return {Object} new state
 */
export default function nav_tabs(state = initial, action) {
  switch (action.type) {
    case ACTIVATE:
      return state.set(action.payload.tab_key, action.payload.key);
    default:
      return state;
  }
}
