import { push } from 'react-router-redux';

import { appPath } from '../helpers/routes';
import { getLocation } from '../selectors/routing';

export const appUrl = (league) => {
  return (dispatch, getState) => {
    const location = getLocation(getState());

    // TODO disabled routing display
    // dispatch(push(location.set('pathname', appPath(league)).toJS()));
  };
};
