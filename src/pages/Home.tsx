import React, { Component } from 'react';
import Loadable from 'react-loadable';
import '../assets/styles/Home.css';

const Logo = Loadable({
  loader: () => import('../components/Logo'),
  loading: () => <h1>loading ...</h1>,
  modules: ['../components/Logo'],
  webpack: () => [require.resolveWeak('../components/Logo')],
});
const Welcome = Loadable({
  loader: () => import('../components/Welcome'),
  loading: () => <h1>loading ...</h1>,
  modules: ['../components/Welcome'],
  webpack: () => [require.resolveWeak('../components/Welcome')],
});

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <Logo />
          <Welcome />
        </div>
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
  }
}

export default Home;
