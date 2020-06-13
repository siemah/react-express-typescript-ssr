import helmet from 'helmet';
import compression from 'compression';
import CSP_DIRECTIVES from '../config/csp';

/**
 * config and setup all necessary middlewares for express app
 * @param server current express app
 */
export function setupMiddlewares(server: any) {
  server.use(compression());
  server.use(helmet());
  if (process.env.NODE_ENV === 'production') {
    server.use(helmet.contentSecurityPolicy({
      directives: CSP_DIRECTIVES,
    }));
  }
}