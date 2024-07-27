import { ServiceInterface } from '@/features/interfaces';
import { PatientEntity } from '@/features/patient/domain/entities/patientEntity';
import { PatientRepository } from '@/features/patient/domain/repositories/patientRepository';

import GeneratePatientCodeService from './generatePatientCodeService';
import {
  CalculatePatientAgeService,
  DeterminePatientIsIdentifiedService,
} from './utils';

class CreatePatientService
  implements ServiceInterface<{ data: PatientEntity }, Promise<PatientEntity>>
{
  constructor(
    private patientRespository: PatientRepository,
    private generatePatientCodeService: GeneratePatientCodeService,
    private calculatePatientAgeService: CalculatePatientAgeService,
    private determinePatientIsIdentifiedService: DeterminePatientIsIdentifiedService
  ) {}

  public async execute(params: {
    data: PatientEntity;
  }): Promise<PatientEntity> {
    const { data } = params;

    const code = this.generatePatientCodeService.execute();
    const age = this.calculatePatientAgeService.execute({
      birthDate: data.birthDate,
    });
    const isIdentified = this.determinePatientIsIdentifiedService.execute({
      patient: data,
    });

    return this.patientRespository.create({
      ...data,
      code,
      age,
      isIdentified,
    });
  }
}

export default CreatePatientService;
