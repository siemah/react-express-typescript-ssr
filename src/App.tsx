import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Loadable from 'react-loadable';
import './assets/styles/App.css';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: () => <h1>loading ...</h1>,
  modules: ['./pages/Home'],
  webpack: () => [require.resolveWeak('./pages/Home')],
});

const Blog = Loadable({
  loader: () => import('./pages/Blog'),
  loading: () => <h1>loading ...</h1>,
  modules: ['./pages/Blog'],
  webpack: () => [require.resolveWeak('./pages/Blog')],
});

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/blog" component={Blog} />
  </Switch>
);

export default App;
