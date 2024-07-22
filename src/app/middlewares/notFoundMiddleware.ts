import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

class NotFoundMiddleware {
  public handle = (
    request: Request,
    _response: Response,
    next: NextFunction
  ) => {
    const error = new createHttpError.NotFound(
      `Not found - ${request.method} ${request.url}`
    );
    next(error);
  };
}

export default new NotFoundMiddleware();
