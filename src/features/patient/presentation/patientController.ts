import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import GetAllPatientService from '@/features/patient/application/services/getAllPatientService';

import { CreatePatientService } from '../application/services';

class PatientController {
  constructor(
    private getAllPatientService: GetAllPatientService,
    private createPatientService: CreatePatientService
  ) {}

  public getAll = async (
    _request: Request,
    response: Response
  ): Promise<void> => {
    const data = await this.getAllPatientService.execute();
    response.status(StatusCodes.OK).json(data);
  };

  public create = async (request: Request, response: Response) => {
    const data = await this.createPatientService.execute(request.body);
    response.status(StatusCodes.CREATED).json(data);
  };
}

export default PatientController;
