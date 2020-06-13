/* tslint:disable */
const CSP_DIRECTIVES = {
  defaultSrc: ["'self'"],
  scriptSrc: ["'self'", (req: any, res: any) => `'nonce-${res.locals.nonce}'`],
  styleSrc: ["'self'"],
};

export default CSP_DIRECTIVES;