export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
  params?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export const GET = 'get'
export const POST = 'post'
export const PUT = 'put'
export const DELETE = 'delete'

export type HttpMethod = typeof GET | typeof POST | typeof PUT | typeof DELETE

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
