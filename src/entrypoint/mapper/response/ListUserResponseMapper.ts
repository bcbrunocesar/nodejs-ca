import { User } from '@core';
import { ListUserResponse } from '@entrypoint';

export default class ListUserResponseMapper {
  public static from(user: User): ListUserResponse {
    return {
      name: user.name,
      username: user.username,
    };
  }
}
