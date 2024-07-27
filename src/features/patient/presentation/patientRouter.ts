import express from 'express';

import {
  CreatePatientService,
  GetByIdPatientService,
  UpdatePatientService,
  GetAllPatientService,
  DeletePatientService,
  GeneratePatientCodeService,
} from '@/features/patient/application/services';
import prismaClient from '@/features/patient/infraestructure/orm/prismaClient';
import PatientRepositoryImpl from '@/features/patient/infraestructure/repositories/patientRepositoryImpl';

import {
  CalculatePatientAgeService,
  DeterminePatientIsIdentifiedService,
} from '../application/services/utils';

import requestValidatorMiddleware from './middlewares/requestValidatorMiddleware';
import {
  patientIdSchema,
  createPatientSchema,
  updatePatientSchema,
} from './middlewares/validation/schemas';
import PatientController from './patientController';

////---- Initialization -------------------------------------------------------
const patientRouter = express.Router();

const patientRepositoryImpl = new PatientRepositoryImpl(prismaClient);

const generatePatientCodeService = new GeneratePatientCodeService();
const calculatePatientAgeService = new CalculatePatientAgeService();
const determinePatientIsIdentifiedService =
  new DeterminePatientIsIdentifiedService();
const getAllPatientService = new GetAllPatientService(patientRepositoryImpl);
const createPatientService = new CreatePatientService(
  patientRepositoryImpl,
  generatePatientCodeService,
  calculatePatientAgeService,
  determinePatientIsIdentifiedService
);
const getByIdPatientService = new GetByIdPatientService(patientRepositoryImpl);
const updatePatientService = new UpdatePatientService(
  patientRepositoryImpl,
  calculatePatientAgeService,
  determinePatientIsIdentifiedService
);
const deletePatientService = new DeletePatientService(patientRepositoryImpl);

const patientController = new PatientController(
  getAllPatientService,
  createPatientService,
  getByIdPatientService,
  updatePatientService,
  deletePatientService
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
patientRouter.delete(
  '/:id',
  requestValidatorMiddleware.handle('params', patientIdSchema),
  patientController.delete
);

export default patientRouter;
