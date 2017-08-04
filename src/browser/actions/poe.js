export const SET_VISIBLE = 'POE/SET_VISIBLE';

/**
 *
 * @param {string[]} league_ids
 * @return {Action}
 */
export function setVisible(league_ids) {
  return {
    type: SET_VISIBLE,
    payload: { league_ids },
  };
};
