import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { ZodError, ZodSchema } from 'zod';

class RequestValidatorMiddleware {
  private ignoredField = '_errors';

  public handle = (
    requestProperty: 'params' | 'query' | 'body',
    schema: ZodSchema
  ) => {
    return (request: Request, _response: Response, next: NextFunction) => {
      const data = request[requestProperty];
      const { success, error } = schema.safeParse(data);

      if (!success) {
        const message = this.composeErrorMessage(error);
        next(new createHttpError.BadRequest(message));
      }

      next();
    };
  };

  private composeErrorMessage = (error: ZodError): string => {
    let message = 'Invalid request data. Fields: \n';

    const errorMessages = this.getErrorMessages(error);
    message = message.concat(errorMessages.join('\n'));

    return message;
  };

  private getErrorMessages = (error: ZodError): string[] => {
    const errorMessages: string[] = [];

    const formattedErrors = error.format();
    for (const key in formattedErrors) {
      if (!Object.prototype.hasOwnProperty.call(formattedErrors, key)) {
        continue;
      }
      if (key === this.ignoredField) {
        continue;
      }

      // @ts-expect-error - Zod provides field name as key on error
      const value = formattedErrors[key] as {
        _errors: string[];
      };
      const joinnedError = value._errors.join(', ');
      const errorMessage = `- ${key}: ${joinnedError}`;

      errorMessages.push(errorMessage);
    }

    return errorMessages;
  };
}

export default new RequestValidatorMiddleware();
