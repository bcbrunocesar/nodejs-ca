import { User } from '@core';

export default class UserRequestMapper {
  public static fromUpdate(updateRequest: any): User {
    const { id, name, username, email } = updateRequest;
    return User.update({ id, name, username, email });
  }

  public static fromCreate(createRequest: any): User {
    const { name, username, email } = createRequest;
    return User.create({ name, username, email });
  }
}
