import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

import {
  CreatePatientService,
  GetByIdPatientService,
  GetAllPatientService,
} from '../application/services';

class PatientController {
  constructor(
    private getAllPatientService: GetAllPatientService,
    private createPatientService: CreatePatientService,
    private getByIdPatientService: GetByIdPatientService
  ) {}

  public getAll = async (
    _request: Request,
    response: Response
  ): Promise<void> => {
    const data = await this.getAllPatientService.execute();
    response.status(StatusCodes.OK).json(data);
  };

  public create = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    const data = await this.createPatientService.execute(request.body);
    response.status(StatusCodes.CREATED).json(data);
  };

  public getById = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = request.params;

    const promise = this.getByIdPatientService.execute(Number(id));
    promise
      .then((data) => {
        response.status(StatusCodes.OK).json(data);
      })
      .catch((error) => {
        next(new createHttpError.NotFound(error?.message));
      });
  };
}

export default PatientController;
