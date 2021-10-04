import { SaveUserBoundary, User } from '@core';

export default class SaveUser {
  public constructor(private readonly boundary: SaveUserBoundary) {}

  public async execute(entity: User): Promise<void> {
    await this.boundary.execute(entity);
  }
}
