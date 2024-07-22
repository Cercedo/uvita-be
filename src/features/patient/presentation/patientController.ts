import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import GetAllPatientService from '@/features/patient/application/services/getAllPatientService';

class PatientController {
  constructor(private getAllPatientService: GetAllPatientService) {}

  public getAll = async (
    _request: Request,
    response: Response
  ): Promise<void> => {
    const data = await this.getAllPatientService.execute();
    response.status(StatusCodes.OK).json(data);
  };
}

export default PatientController;
