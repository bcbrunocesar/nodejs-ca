import { UpdateUserRepository } from '@infra';
import { UpdateUser } from '@core';
import { UpdateUserController } from '@entrypoint';

export const updateUserController = () => {
  const repository = new UpdateUserRepository();
  const usecase = new UpdateUser(repository);
  const controller = new UpdateUserController(usecase);

  return controller;
};
