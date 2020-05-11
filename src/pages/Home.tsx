import React from 'react';
import logo from '../assets/images/react.svg';
import '../assets/styles/Home.css';
import { Link } from 'react-router-dom';
import { StateContext } from '../types/server';
import PageLayout from '../components/PageLayout';

// add some props to window object to avoid error on TS(2339)
declare global {
  interface Window { __INIT__STATE__: any; }
}

const Home = (props: any) => {
  let _state: StateContext;
  if (typeof window !== 'undefined') {
    _state = window.__INIT__STATE__?.state;
    delete window.__INIT__STATE__;
  } else {
    _state = props.staticContext.state;
  }
  const [state, setState] = React.useState<StateContext>(_state);
  const siteData = { author: 'siemah', description: '', keywords: ['site'], siteUrl: 'http:localhost.com', title: 'Home Page', };
  const _seo = {
    title: 'Home',
    site: siteData,
    description: 'this is my description',
    lang: 'en',
    image: { height: 100, width: 100, src: 'logo.png' }
  };
  return (
    <PageLayout seoMetaData={_seo} className="main-container Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Welcome to Reactypress (React SSR) boilerplate</h2>
        <Link to="/blog">Blog</Link>
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
    </PageLayout>
  );
};

export default Home;
