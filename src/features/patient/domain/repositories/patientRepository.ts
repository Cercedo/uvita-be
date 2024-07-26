import { PatientEntity } from '../entities/patientEntity';

export interface PatientRepository {
  getAll: () => Promise<PatientEntity[]>;
  create: (data: PatientEntity) => Promise<PatientEntity>;
  getById: (id: number) => Promise<PatientEntity | null>;
  update: (id: number, data: PatientEntity) => Promise<PatientEntity>;
  delete: (id: number) => Promise<void>;
}
