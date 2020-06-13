import { HelmetData } from 'react-helmet';
import serialize from 'serialize-javascript';

/**
 * html skeleton rendering
 * @param markup react render to string which containing a rendered app
 * @param metaData helmet renderStatic results
 * @param assets containig assets
 * @param globalState state to be passed down
 */
export function jsxToHtml(markup: string, metaData: HelmetData, assets: any, state?: object): string {
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
          assets.styles
          .map((style: any) => {
            return `<link href="${style.file}" rel="stylesheet"/>`;
          })
          .join('\n')
        }
        </head>
        <body ${metaData.bodyAttributes.toString()}>
        <div id="root">${markup}</div>
        <script>window.__INIT__STATE__=${serialize(state)}</script>
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}"></script>`
            : `<script src="${assets.client.js}" crossorigin></script>`
        }
        ${
          assets.chunks
          .map((chunk: any) =>
              process.env.NODE_ENV === 'production'
                ? `<script src="/${chunk.file}"></script>`
                : `<script src="http://${process.env.HOST}:${parseInt(
                    process.env.PORT as string,
                    10
                  ) + 1}/${chunk.file}"></script>`
          )
          .join('\n')
        }
        <script>window.main();</script>
      </body>
    </html>
  `);
}