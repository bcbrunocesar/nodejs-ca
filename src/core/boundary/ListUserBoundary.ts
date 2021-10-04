import { User } from '@core';

export interface ListUserBoundary {
  execute(): Promise<User[]>;
}
