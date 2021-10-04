import { ListUserBoundary, User } from '@core';

export default class ListUser {
  public constructor(private readonly boundary: ListUserBoundary) {}

  public async execute(): Promise<User[]> {
    return this.boundary.execute();
  }
}
