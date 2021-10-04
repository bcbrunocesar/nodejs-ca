import { HttpResponse } from '@infra';

export default abstract class BaseController {
  abstract handle(queryParams: any, body: any): Promise<HttpResponse>;
}
