import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

import {
  CreatePatientService,
  GetByIdPatientService,
  GetAllPatientService,
  UpdatePatientService,
  DeletePatientService,
} from '../application/services';

class PatientController {
  constructor(
    private getAllPatientService: GetAllPatientService,
    private createPatientService: CreatePatientService,
    private getByIdPatientService: GetByIdPatientService,
    private updatePatientService: UpdatePatientService,
    private deletePatientService: DeletePatientService
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
    const data = await this.createPatientService.execute({
      data: request.body,
    });
    response.status(StatusCodes.CREATED).json(data);
  };

  public getById = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = request.params;

    const promise = this.getByIdPatientService.execute({ id: Number(id) });
    promise
      .then((data) => {
        response.status(StatusCodes.OK).json(data);
      })
      .catch((error) => {
        next(new createHttpError.NotFound(error?.message));
      });
  };

  public update = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const { id } = request.params;

    const promise = this.updatePatientService.execute({
      id: Number(id),
      data: request.body,
    });
    promise
      .then((data) => {
        response.status(StatusCodes.OK).json(data);
      })
      .catch((error) => {
        next(new createHttpError.NotFound(error?.message));
      });
  };

  public delete = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { id } = request.params;

    const promise = this.deletePatientService.execute({ id: Number(id) });
    promise
      .then(() => {
        response.status(StatusCodes.NO_CONTENT).json();
      })
      .catch((error) => {
        next(new createHttpError.NotFound(error?.message));
      });
  };
}

export default PatientController;
