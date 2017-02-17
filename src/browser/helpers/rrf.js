/**
 * various helper for react-redux-form
 */

/**
 * @param {Object} action redux action
 * @param {string} model name of the form
 * @return {boolean} true if the given action was fired by a rrf change action
 *                   on the given form model
 */
export const formModelChanged = (action, model) => {
  return action.type === 'rrf/change'
    && action.model.startsWith(`${model}.`);
};
