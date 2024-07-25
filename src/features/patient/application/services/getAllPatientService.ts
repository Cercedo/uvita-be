import { ServiceInterface } from '@/features/interfaces';
import { PatientEntity } from '@/features/patient/domain/entities/patientEntity';
import { PatientRepository } from '@/features/patient/domain/repositories/patientRepository';

class GetAllPatientService
  implements ServiceInterface<void, Promise<PatientEntity[]>>
{
  constructor(private patientRepository: PatientRepository) {}

  public async execute(): Promise<PatientEntity[]> {
    return this.patientRepository.getAll();
  }
}

export default GetAllPatientService;
