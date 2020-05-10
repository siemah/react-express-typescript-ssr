import React from 'react';
import logo from '../assets/images/react.svg';
import '../assets/styles/Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { StateContext } from '../types/server';

declare global {
  interface Window { __INIT__STATE__: any; }
}

const Home = (props: any) => {
  let _state: StateContext;
  if (typeof window !== 'undefined') {
    _state = window.__INIT__STATE__?.state;
    console.log('client', _state);
    delete window.__INIT__STATE__;
  } else {
    _state = props.staticContext.state;
  }
  const [state, setState] = React.useState<StateContext>(_state);
  return (
    <div className="Home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Welcome to Razzle</h2>
        <Link to="/auth">Auth</Link>
      </div>
      <p className="Home-intro">
        To get started, edit <code>src/App.js</code> or{' '}
        <code>src/Home.js</code> and save to reload.
        </p>
      <ul className="Home-resources">
        <li>
          <a href="https://github.com/jaredpalmer/razzle">Docs</a>
        </li>
        <li>
          <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
        </li>
        <li>
          <a href="https://palmer.chat">Community Slack</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
