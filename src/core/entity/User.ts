export default class User {
  id: number;
  name: string;
  username: string;
  email: string;

  private constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }

  public static update(user: User): User {
    const userInstance: User = new User(user);
    return userInstance;
  }

  public static create({ name, username, email }: Partial<User>): User {
    const userInstance: User = new User({ name, username, email });
    return userInstance;
  }
}
