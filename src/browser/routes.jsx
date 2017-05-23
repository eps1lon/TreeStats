// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route } from 'react-router';

import TreeStatsApp from './containers/TreeStatsApp.jsx';

const routes = (
  <Route path="/(league/:league)" component={TreeStatsApp} />
);

// are the only helpers rly only jsx expressions for components?
export const appPath = (league) => {
  let url = '/';

  if (league) {
    url += `league/${league.name}`;
  }

  return url;
};

export default routes;
