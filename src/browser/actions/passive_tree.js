export const FETCH_TREE = 'PASSIVE_TREE/FETCH';
export const NEW_TREE = 'PASSIVE_TREE/NEW';

/**
 * @param {string} id
 * @return {Object} action
 */
export function fetchTree(id) {
  return {
    type: FETCH_TREE,
    payload: { id },
  };
};

/**
 * @param {Object} data valid tree json see poe wiki
 * @param {any} id
 * @return {Object} action
 */
export function newTree(data, id) {
  return {
    type: NEW_TREE,
    payload: { data: data.passiveSkillTreeData, id },
  };
};
