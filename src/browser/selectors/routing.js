export const getLocation = (state) =>
  state.getIn(['routing', 'locationBeforeTransitions']);
