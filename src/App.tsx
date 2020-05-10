import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/App.css';
import Auth from './pages/Auth';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/auth" component={Auth} />
  </Switch>
);

export default App;
