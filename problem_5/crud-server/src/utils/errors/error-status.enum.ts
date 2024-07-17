// httpStatus.ts
export enum HttpStatus {
  NotFound = 404,
  Validation = 400,
  Internal = 500,
  Unauthorized = 401,
  Forbidden = 403,
  BadRequest = 400,
  Conflict = 409,
  TooManyRequests = 429,
  ServiceUnavailable = 503,
}
