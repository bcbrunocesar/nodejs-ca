import { SaveUserRepository } from '@infra';
import { SaveUser } from '@core';
import { SaveUserController } from '@entrypoint';

export const saveUserController = () => {
  const repository = new SaveUserRepository();
  const usecase = new SaveUser(repository);
  const controller = new SaveUserController(usecase);

  return controller;
};
