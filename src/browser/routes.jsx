// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route } from 'react-router';

import TreeStatsApp from './containers/TreeStatsApp.jsx';

const routes = (
  <Route path="*" component={TreeStatsApp} />
);

export default routes;
