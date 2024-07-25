import { ServiceInterface } from '@/features/interfaces';

import { PatientEntity } from '../../domain/entities/patientEntity';
import { PatientRepository } from '../../domain/repositories/patientRepository';

class GetByIdPatientService
  implements ServiceInterface<number, Promise<PatientEntity>>
{
  constructor(private patientRepository: PatientRepository) {}

  public async execute(id: number): Promise<PatientEntity> {
    const patient = await this.patientRepository.getById(id);

    if (!patient) {
      throw new Error(`Patient with id ${id} not found.`);
    }

    return patient;
  }
}

export default GetByIdPatientService;
