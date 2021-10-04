import { HttpResponse, HttpStatusCode } from '@infra';
import { SaveUser, User } from '@core';
import { UserRequestMapper } from '@entrypoint';

import BaseController from './BaseController';

export default class SaveUserController extends BaseController {
  public constructor(private readonly usecase: SaveUser) {
    super();
  }

  public handle = async (
    queryParams: any,
    body: any
  ): Promise<HttpResponse> => {
    const user: User = UserRequestMapper.fromCreate(body);
    await this.usecase.execute(user);

    return { status: HttpStatusCode.CREATED };
  };
}
