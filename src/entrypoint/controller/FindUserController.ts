import { HttpResponse, HttpStatusCode } from '@infra';
import { FindUser, User } from '@core';
import { UserResponseMapper } from '@entrypoint';

import BaseController from './BaseController';

export default class FindUserController extends BaseController {
  public constructor(private readonly usecase: FindUser) {
    super();
  }

  public handle = async (
    queryParams: any,
    body: any
  ): Promise<HttpResponse> => {
    const id = Number(queryParams.id);

    const user: User = await this.usecase.execute(id);
    const userResponse = UserResponseMapper.from(user);

    return { status: HttpStatusCode.SUCCESS, data: userResponse };
  };
}
