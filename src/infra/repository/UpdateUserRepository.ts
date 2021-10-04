import { User, UpdateUserBoundary } from '@core';

export default class UpdateUserRepository implements UpdateUserBoundary {
  private users: User[] = [];

  public async execute(entity: User): Promise<void> {
    this.users.push(entity);
  }
}
