import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles/App.css';
import Blog from './pages/Blog';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/blog" component={Blog} />
  </Switch>
);

export default App;
