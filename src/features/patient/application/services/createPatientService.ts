import { ServiceInterface } from '@/features/interfaces';
import { PatientEntity } from '@/features/patient/domain/entities/patientEntity';
import { PatientRepository } from '@/features/patient/domain/repositories/patientRepository';

class CreatePatientService
  implements ServiceInterface<{ data: PatientEntity }, Promise<PatientEntity>>
{
  constructor(private patientRespository: PatientRepository) {}

  public async execute(params: {
    data: PatientEntity;
  }): Promise<PatientEntity> {
    const { data } = params;
    return this.patientRespository.create(data);
  }
}

export default CreatePatientService;
