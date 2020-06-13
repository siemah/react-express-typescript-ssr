import express from 'express';
import Loadable from 'react-loadable';

// this require is necessary for server HMR to recover from error
// tslint:disable-next-line:no-var-requires
let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3002;

export default Loadable.preloadAll().then(() =>
  express()
    .use((req, res) => app.handle(req, res))
    .listen(port, function(err) {
      if (err) {
        console.error(err);
        return;
      }
    console.log(`> Started on port http://localhost:${port}`);
  })
);