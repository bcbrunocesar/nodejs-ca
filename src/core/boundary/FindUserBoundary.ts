import { User } from '@core';

export interface FindUserBoundary {
  execute(id: number): Promise<User>;
}
