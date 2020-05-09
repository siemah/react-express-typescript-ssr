import { HelmetData } from "react-helmet";

/**
 * html skeleton rendering
 * @param markup react render to string which containing a rendered app
 * @param metaData helmet renderStatic results
 * @param assets containig assets
 * @param globalState state to be passed down
 */
export function jsxToHtml(markup: string, metaData: HelmetData, assets: any, globalState?: object): string {
  return (`
    <!doctype html>
    <html ${metaData.htmlAttributes.toString()}>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${metaData.title.toString()}
        ${metaData.meta.toString()}
        ${metaData.link.toString()}
        ${
      assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''
      }
        ${
      process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`
      }
      </head>
      <body ${metaData.bodyAttributes.toString()}>
        <div id="root">${markup}</div>
      </body>
    </html>
  `);
}