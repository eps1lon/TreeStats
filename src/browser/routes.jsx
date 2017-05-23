// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route } from 'react-router';

import TreeStatsApp from './containers/TreeStatsApp.jsx';

// adjust helpers/routes onchange
const routes = (
  <Route path="/(league/:league)" component={TreeStatsApp} />
);

export default routes;
