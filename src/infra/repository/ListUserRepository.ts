import { HttpContext } from '@infra';
import { ListUserBoundary, User } from '@core';

export default class ListUserRepository implements ListUserBoundary {
  public constructor(private readonly httpContext: HttpContext) {}

  public execute = (): Promise<User[]> => {
    console.log(this.httpContext);

    const users: User[] = [];
    users.push(
      User.create({ name: 'Bruno', email: 'contato@bc.io', username: '@bc' }),
      User.create({
        name: 'Cesar',
        email: 'cesar@bc.io',
        username: '@cesar',
      })
    );

    return new Promise<User[]>((resolve) => resolve(users));
  };
}
