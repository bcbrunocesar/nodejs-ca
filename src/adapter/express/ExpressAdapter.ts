import { Request, Response, NextFunction } from 'express';
import { HttpResponse } from '@infra';

export const expressAdapter = function (moduleFn: any, httpContextFn?: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const controller = httpContextFn
      ? moduleFn(httpContextFn(req))
      : moduleFn();

    try {
      const { status, data, errors, message }: HttpResponse =
        await controller.handle(req.params, req.body);

      if (errors) {
        res.status(status).json({ message, errors });
        return;
      }

      if (data) {
        res.status(status).json({ message, data });
        return;
      }

      res.status(status).json();
    } catch (e) {
      console.error('[ERROR] EXPRESS ADAPTER');
      next(e);
    }
  };
};

// export default class ExpressAdapter {
// public static create =
//   (fn: any) => async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { status, data, errors, message }: HttpResponseBase = await fn(
//         req.params,
//         req.body
//       );
//       if (errors) {
//         res.status(status).json({ message, errors });
//         return;
//       }
//       if (data) {
//         res.status(status).json({ message, data });
//         return;
//       }
//       res.status(status).json();
//     } catch (e) {
//       console.error('[ERROR] EXPRESS ADAPTER');
//       next(e);
//     }
//   };
