import { HttpResponse, HttpStatusCode } from '@infra';
import { ListUser, User } from '@core';
import { ListUserResponseMapper } from '@entrypoint';

import BaseController from './BaseController';

export default class ListUserController extends BaseController {
  public constructor(private readonly usecase: ListUser) {
    super();
  }

  public handle = async (): Promise<HttpResponse> => {
    const users: User[] = await this.usecase.execute();
    const listUsersResponse = users.map((user: User) =>
      ListUserResponseMapper.from(user)
    );

    return { status: HttpStatusCode.SUCCESS, data: listUsersResponse };
  };
}
