import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constants/routes'
import withAuthentication from './components/Auth/withAuthentication';
import lazyComponent from './components/LazyComponent'

const LoginPage = lazyComponent(()=> import("./views/Login"));
const RegisterPage = lazyComponent(()=> import("./views/Register"));
const DashboardPage = lazyComponent(()=> import('./layouts/Dashboard'))
const NotFoundPage = lazyComponent(()=> import('./views/NotFound'))

const App = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.LANDING} exact component={DashboardPage} />
      <Route path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.REGISTER} component={RegisterPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default withAuthentication(App);
