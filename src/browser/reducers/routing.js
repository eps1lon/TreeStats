import { LOCATION_CHANGE } from 'react-router-redux';
import { Map } from 'immutable';

const initial = Map({
  locationBeforeTransitions: null,
});

const routing = (state = initial, action) => {
  switch (action.type) {
  case LOCATION_CHANGE:
    return state.merge({
      locationBeforeTransitions: action.payload,
    });
  default:
    return state;
  }
};

export default routing;
