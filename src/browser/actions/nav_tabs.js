export const ACTIVATE = 'ACTIVATE';

/**
 * action creator to activate a specific child in a nav tab
 *
 * @param {string} tab_key key of the NavTab component
 * @param {string} key key of a child of NavTab
 * @return {Object}
 */
export function activate(tab_key, key) {
  return {
    type: ACTIVATE,
    payload: {tab_key, key},
  };
};
