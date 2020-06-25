import { Router, } from 'express';
import App from '../../App';
import React from 'react';
import { Capture, } from 'react-loadable';
import { getBundles, } from 'react-loadable/webpack';
import { StaticRouter } from 'react-router-dom';

import { renderToString } from 'react-dom/server';
import { Helmet, } from 'react-helmet';
import { jsxToHtml } from '../../helpers/rendering';
import { ReactRouterContextType } from '../../types/server';
// @ts-ignore
import stats from '../../../build/react-loadable.json';
import Post from '../../models/post';

const mainRoutePage = Router();

let assets: any;
const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

function getPosts (): Promise<object[]> {
  return new Promise(async (resolve) => {
    try {
      const posts = await Post.findAll({
        attributes: ['title', 'id', 'content']
      });
      resolve(posts);
    } catch (error) {
      resolve([]);
    }
  });
}

mainRoutePage
  .get('/posts', async (req, res) => {
    const posts = await getPosts();
    res.status(200).json(posts);
  })
  .get('/*', async (req, res) => {
    const modules: string[] = [];
    const context: ReactRouterContextType = {};
    context.state = {
      user: {
        role: 'user',
        fullname: 'Siemah',
      },
      data: await getPosts()
    };

    const markup = renderToString(
      <Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Capture>
    );
    const helmetMeta = Helmet.renderStatic();

    if (context.url) {
      res.redirect(context.url);
    } else {
      const bundles = getBundles(stats, modules);
      assets.chunks = bundles.filter(bundle => bundle.file.endsWith('.js'));
      assets.styles = bundles.filter(bundle => bundle.file.endsWith('.css'));

      res.status(200).send(jsxToHtml(markup, helmetMeta, assets, context.state, res.locals.nonce));
    }
  });

export default mainRoutePage;