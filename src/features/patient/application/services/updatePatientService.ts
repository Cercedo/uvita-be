import { ServiceInterface } from '@/features/interfaces';

import { PatientEntity } from '../../domain/entities/patientEntity';
import { PatientRepository } from '../../domain/repositories/patientRepository';

import {
  CalculatePatientAgeService,
  DeterminePatientIsIdentifiedService,
} from './utils';

class UpdatePatientService
  implements
    ServiceInterface<
      { id: number; data: PatientEntity },
      Promise<PatientEntity>
    >
{
  constructor(
    private patientRepository: PatientRepository,
    private calculatePatientAgeService: CalculatePatientAgeService,
    private determinePatientIsIdentifiedService: DeterminePatientIsIdentifiedService
  ) {}

  public async execute(params: {
    id: number;
    data: PatientEntity;
  }): Promise<PatientEntity> {
    const { id, data } = params;

    const age = this.calculatePatientAgeService.execute({
      birthDate: data.birthDate,
    });
    const isIdentified = this.determinePatientIsIdentifiedService.execute({
      patient: data,
    });

    try {
      const patient = await this.patientRepository.update(id, {
        ...data,
        age,
        isIdentified,
      });
      return patient;
    } catch (error) {
      throw new Error(`Patient with id ${id} not found.`);
    }
  }
}

export default UpdatePatientService;
