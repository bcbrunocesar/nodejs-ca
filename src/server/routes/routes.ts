import { Router } from 'express';

import { createHttpContext, expressAdapter } from '@adapter';
import {
  saveUserController,
  updateUserController,
  listUserController,
  findUserController,
  routeValidateMiddleware,
} from '@server';

const routes = Router();

routes.post(
  '/user',
  routeValidateMiddleware,
  expressAdapter(saveUserController)
);

routes.put(
  '/user',
  routeValidateMiddleware,
  expressAdapter(updateUserController)
);

routes.get(
  '/user',
  routeValidateMiddleware,
  expressAdapter(listUserController, createHttpContext)
);

routes.get(
  '/user/:id',
  routeValidateMiddleware,
  expressAdapter(findUserController)
);

export { routes };
