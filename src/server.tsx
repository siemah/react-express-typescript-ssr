import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import helmet from 'helmet';
import { renderToString } from 'react-dom/server';
import { Helmet, } from 'react-helmet';
import { jsxToHtml } from './helpers/rendering';
import { ReactRouterContextType } from './types/server';

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();
server
  .use(helmet())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req, res) => {
    const context: ReactRouterContextType = {};
    context.state = {
      user: {
        role: 'user',
        fullname: 'Siemah',
      },
    };
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );
    const helmetMeta = Helmet.renderStatic();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(jsxToHtml(markup, helmetMeta, assets, context.state));
    }
  });

export default server;
