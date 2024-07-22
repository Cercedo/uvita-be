import express from 'express';

import GetAllPatientService from '@/features/patient/application/services/getAllPatientService';
import PatientRepositoryImpl from '@/features/patient/infraestructure/repositories/patientRepositoryImpl';

import PatientController from './patientController';

////---- Initialization -------------------------------------------------------
const patientRouter = express.Router();

const patientRepository = new PatientRepositoryImpl();
const getAllPatientService = new GetAllPatientService(patientRepository);
const patientController = new PatientController(getAllPatientService);

////---- Routes ---------------------------------------------------------------
patientRouter.get('/', patientController.getAll);

export default patientRouter;
