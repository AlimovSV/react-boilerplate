// https://create-react-app.dev/docs/adding-a-router
// https://reacttraining.com/react-router/web/guides/quick-start

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeRoutes from './Home';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={HomeRoutes} />
  </Switch>
);

export default Routes;
