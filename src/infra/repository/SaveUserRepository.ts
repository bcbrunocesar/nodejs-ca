import { User, SaveUserBoundary } from '@core';

export default class SaveUserRepository implements SaveUserBoundary {
  private users: User[] = [];

  public async execute(entity: User): Promise<void> {
    this.users.push(entity);
  }
}
