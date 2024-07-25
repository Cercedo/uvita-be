import { ServiceInterface } from '@/features/interfaces';
import { PatientEntity } from '@/features/patient/domain/entities/patientEntity';
import { PatientRepository } from '@/features/patient/domain/repositories/patientRepository';

class CreatePatientService
  implements ServiceInterface<PatientEntity, Promise<PatientEntity>>
{
  constructor(private patientRespository: PatientRepository) {}

  public async execute(patient: PatientEntity): Promise<PatientEntity> {
    return this.patientRespository.create(patient);
  }
}

export default CreatePatientService;
