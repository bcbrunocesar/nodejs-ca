import { Request } from 'express';
import { HttpContext } from '@infra';

// [OPTION] https://github.com/skonves/express-http-context
export function createHttpContext(req: Request): HttpContext {
  const httpContext: HttpContext = { xHeader: req.app.get('header') };
  return httpContext;
}
