import { FindUserBoundary, User } from '@core';

export default class FindUserRepository implements FindUserBoundary {
  public execute(id: number): Promise<User> {
    const users: User[] = [];
    users.push(
      User.create({ name: 'Bruno', email: 'contato@bc.io', username: '@bc' }),
      User.create({
        name: 'Cesar',
        email: 'cesar@bc.io',
        username: '@cesar',
      })
    );

    const user = users.find((user: User) => user.id === id);
    return new Promise<User>((resolve) => resolve(user!));
  }
}
