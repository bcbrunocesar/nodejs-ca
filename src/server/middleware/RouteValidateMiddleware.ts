import { HttpStatusCode } from '@infra';
import { Request, Response, NextFunction } from 'express';

export const routeValidateMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.get('OBG-HEADER')) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ errors: ['Header OBG-HEADER é obrigatório!'] });
  }

  req.app.set('header', 'X-OBG-HEADER');
  next();
};
