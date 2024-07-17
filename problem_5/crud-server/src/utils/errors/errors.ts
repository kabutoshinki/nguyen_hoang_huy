// errors.ts
import { ErrorCodes } from "./error-codes.enum";
import { HttpStatus } from "./error-status.enum";

export class AppError extends Error {
  constructor(public message: string, public statusCode: HttpStatus, public code: ErrorCodes) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, HttpStatus.NotFound, ErrorCodes.NotFound);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, HttpStatus.Validation, ErrorCodes.Validation);
  }
}

export class InternalError extends AppError {
  constructor(message: string) {
    super(message, HttpStatus.Internal, ErrorCodes.Internal);
  }
}
