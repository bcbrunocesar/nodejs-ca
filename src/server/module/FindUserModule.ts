import { FindUserRepository } from '@infra';
import { FindUser } from '@core';
import { FindUserController } from '@entrypoint';

export const findUserController = () => {
  const repository = new FindUserRepository();
  const usecase = new FindUser(repository);
  const controller = new FindUserController(usecase);

  return controller;
};
