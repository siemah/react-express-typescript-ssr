import helmet from 'helmet';
import compression from 'compression';
import CSP_DIRECTIVES from '../config/csp';
import { Response } from 'express';

/**
 * config and setup all necessary middlewares for express app
 * @param server current express app
 */
export function setupMiddlewares(server: any, express: any) {
  server.use(compression());
  server.use(express.static(process.env.RAZZLE_PUBLIC_DIR!));
  server.use(helmet());
  server.use((req: any, res: Response, next: any) => {
    res.locals.nonce = Date.now();
    next();
  });
  if (process.env.NODE_ENV === 'production') {
    server.use(helmet.contentSecurityPolicy({
      directives: CSP_DIRECTIVES,
    }));
  }
}