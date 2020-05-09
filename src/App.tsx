import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Auth from './pages/Auth';

const App = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/auth" component={Auth} />
  </Switch>
);

export default App;
