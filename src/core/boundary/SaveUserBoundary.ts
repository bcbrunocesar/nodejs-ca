import { User } from '@core';

export interface SaveUserBoundary {
  execute(entity: User): Promise<void>;
}
