/* tslint:disable */
const CSP_DIRECTIVES = {
  defaultSrc: ["'self'"],
  scriptSrc: [
    "'self'",
    (req: any, res: any) => `'nonce-${res.locals.nonce}'`,
    '*.cloudflare.com',
    'static.cloudflareinsights.com',
  ],
  styleSrc: [
    "'self'",
    "'unsafe-inline'",
  ],
};

export default CSP_DIRECTIVES;