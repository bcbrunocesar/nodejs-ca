export interface HttpResponse {
  status: number;
  message?: string;
  errors?: Array<unknown>;
  data?: Array<unknown> | unknown;
}
