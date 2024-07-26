import express from 'express';

import {
  CreatePatientService,
  GetByIdPatientService,
  UpdatePatientService,
} from '@/features/patient/application/services';
import GetAllPatientService from '@/features/patient/application/services/getAllPatientService';
import PatientRepositoryImpl from '@/features/patient/infraestructure/repositories/patientRepositoryImpl';

import requestValidatorMiddleware from './middlewares/requestValidatorMiddleware';
import {
  patientIdSchema,
  createPatientSchema,
  updatePatientSchema,
} from './middlewares/validation/schemas';
import PatientController from './patientController';

////---- Initialization -------------------------------------------------------
const patientRouter = express.Router();

const patientRepositoryImpl = new PatientRepositoryImpl();
const getAllPatientService = new GetAllPatientService(patientRepositoryImpl);
const createPatientService = new CreatePatientService(patientRepositoryImpl);
const getByIdPatientService = new GetByIdPatientService(patientRepositoryImpl);
const updatePatientService = new UpdatePatientService(patientRepositoryImpl);
const patientController = new PatientController(
  getAllPatientService,
  createPatientService,
  getByIdPatientService,
  updatePatientService
);

////---- Routes ---------------------------------------------------------------
patientRouter.get('/', patientController.getAll);
patientRouter.post(
  '/',
  requestValidatorMiddleware.handle('body', createPatientSchema),
  patientController.create
);
patientRouter.get(
  '/:id',
  requestValidatorMiddleware.handle('params', patientIdSchema),
  patientController.getById
);
patientRouter.put(
  '/:id',
  requestValidatorMiddleware.handle('params', patientIdSchema),
  requestValidatorMiddleware.handle('body', updatePatientSchema),
  patientController.update
);

export default patientRouter;
