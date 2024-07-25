import express from 'express';

import { CreatePatientService } from '@/features/patient/application/services';
import GetAllPatientService from '@/features/patient/application/services/getAllPatientService';
import PatientRepositoryImpl from '@/features/patient/infraestructure/repositories/patientRepositoryImpl';

import requestValidatorMiddlewate from './middlewares/requestValidatorMiddlewate';
import createPatientSchema from './middlewares/validation/schemas/createPatientSchema';
import PatientController from './patientController';

////---- Initialization -------------------------------------------------------
const patientRouter = express.Router();

const patientRepository = new PatientRepositoryImpl();
const getAllPatientService = new GetAllPatientService(patientRepository);
const createPatientService = new CreatePatientService(patientRepository);
const patientController = new PatientController(
  getAllPatientService,
  createPatientService
);

////---- Routes ---------------------------------------------------------------
patientRouter.get('/', patientController.getAll);
patientRouter.post(
  '/',
  requestValidatorMiddlewate.handle('body', createPatientSchema),
  patientController.create
);

export default patientRouter;
