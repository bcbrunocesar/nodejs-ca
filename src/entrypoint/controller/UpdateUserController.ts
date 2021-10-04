import { HttpResponse, HttpStatusCode } from '@infra';
import { UpdateUser, User } from '@core';
import { UserRequestMapper } from '@entrypoint';

import BaseController from './BaseController';

export default class UpdateUserController extends BaseController {
  public constructor(private readonly usecase: UpdateUser) {
    super();
  }

  public handle = async (
    queryParams: any,
    body: any
  ): Promise<HttpResponse> => {
    const user: User = UserRequestMapper.fromUpdate(body);
    await this.usecase.execute(user);

    return { status: HttpStatusCode.NO_CONTENT };
  };
}
