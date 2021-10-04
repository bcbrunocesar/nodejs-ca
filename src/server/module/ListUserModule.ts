import { HttpContext, ListUserRepository } from '@infra';
import { ListUser } from '@core';
import { ListUserController } from '@entrypoint';

export const listUserController = (httpContext: HttpContext) => {
  const repository = new ListUserRepository(httpContext);
  const usecase = new ListUser(repository);
  const controller = new ListUserController(usecase);

  return controller;
};
