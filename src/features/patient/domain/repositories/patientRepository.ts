import { PatientEntity } from '../entities/patientEntity';

export interface PatientRepository {
  getAll: () => Promise<PatientEntity[]>;
  create: (data: PatientEntity) => Promise<PatientEntity>;
  getById: (id: number) => Promise<PatientEntity | null>;
}
