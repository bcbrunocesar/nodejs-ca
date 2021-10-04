import { User } from '@core';

export interface UpdateUserBoundary {
  execute(entity: User): Promise<void>;
}
