import { Request, Response, NextFunction } from 'express';
import createHttpError, { HttpError } from 'http-errors';

class ErrorMiddleware {
  public handle = (
    error: unknown,
    _request: Request,
    response: Response,
    _next: NextFunction
  ): void => {
    const isHttpError = this.isHttpError(error);

    const _error = isHttpError
      ? (error as HttpError)
      : this.getDefaultHttpError();

    response.status(_error.statusCode).json({ error: _error.message });
  };

  private isHttpError = (error: unknown): boolean => {
    return createHttpError.isHttpError(error);
  };

  private getDefaultHttpError = (): HttpError => {
    return new createHttpError.InternalServerError();
  };
}

export default new ErrorMiddleware();
