import { UpdateUserBoundary, User } from '@core';

export default class UpdateUser {
  public constructor(private readonly boundary: UpdateUserBoundary) {}

  public async execute(entity: User): Promise<void> {
    await this.boundary.execute(entity);
  }
}
