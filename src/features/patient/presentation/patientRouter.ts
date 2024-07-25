import express from 'express';

import {
  CreatePatientService,
  GetByIdPatientService,
} from '@/features/patient/application/services';
import GetAllPatientService from '@/features/patient/application/services/getAllPatientService';
import PatientRepositoryImpl from '@/features/patient/infraestructure/repositories/patientRepositoryImpl';

import requestValidatorMiddlewate from './middlewares/requestValidatorMiddlewate';
import { patientIdSchema } from './middlewares/validation/schemas';
import PatientController from './patientController';

////---- Initialization -------------------------------------------------------
const patientRouter = express.Router();

const patientRepositoryImpl = new PatientRepositoryImpl();
const getAllPatientService = new GetAllPatientService(patientRepositoryImpl);
const createPatientService = new CreatePatientService(patientRepositoryImpl);
const getByIdPatientService = new GetByIdPatientService(patientRepositoryImpl);
const patientController = new PatientController(
  getAllPatientService,
  createPatientService,
  getByIdPatientService
);

////---- Routes ---------------------------------------------------------------
patientRouter.get('/', patientController.getAll);
patientRouter.post(
  '/',
  requestValidatorMiddlewate.handle('body', createPatientSchema),
  patientController.create
);
patientRouter.get(
  '/:id',
  requestValidatorMiddlewate.handle('params', patientIdSchema),
  patientController.getById
);

export default patientRouter;
