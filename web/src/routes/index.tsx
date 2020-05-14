import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} exact />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
