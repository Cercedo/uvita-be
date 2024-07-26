import { ServiceInterface } from '@/features/interfaces';

import { PatientEntity } from '../../domain/entities/patientEntity';
import { PatientRepository } from '../../domain/repositories/patientRepository';

class UpdatePatientService
  implements
    ServiceInterface<
      { id: number; data: PatientEntity },
      Promise<PatientEntity>
    >
{
  constructor(private patientRepository: PatientRepository) {}

  public async execute(params: {
    id: number;
    data: PatientEntity;
  }): Promise<PatientEntity> {
    const { id, data } = params;

    const patient = await this.patientRepository.getById(id);
    if (!patient) {
      throw new Error(`Patient with id ${id} not found.`);
    }

    return this.patientRepository.update(id, { ...patient, ...data });
  }
}

export default UpdatePatientService;
