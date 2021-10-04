import { User } from '@core';
import { UserResponse } from '@entrypoint';

export default class UserResponseMapper {
  public static from(user: User): UserResponse {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      username: user.username,
    };
  }
}
