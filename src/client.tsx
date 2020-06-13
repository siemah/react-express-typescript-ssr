import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { hydrate } from 'react-dom';
import App from './App';

// @ts-ignore
window.main = () => {
  render(App);
};

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewApp = require("./App").default;
    render(NewApp);
  });
}

function render(Root: any) {
  Loadable.preloadReady().then(() => {
    hydrate(
      <BrowserRouter>
        <Root />
      </BrowserRouter>,
      document.getElementById('root')
    );
  });
}