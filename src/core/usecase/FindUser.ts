import { FindUserBoundary, User } from '@core';

export default class FindUser {
  public constructor(private readonly boundary: FindUserBoundary) {}

  public async execute(id: number): Promise<User> {
    return this.boundary.execute(id);
  }
}
