import { ServiceInterface } from '@/features/interfaces';

import { PatientRepository } from '../../domain/repositories/patientRepository';

class DeletePatientService
  implements ServiceInterface<{ id: number }, Promise<void>>
{
  constructor(private patientRepository: PatientRepository) {}

  public async execute(params: { id: number }): Promise<void> {
    const { id } = params;

    const patient = await this.patientRepository.getById(id);
    if (!patient) {
      throw new Error(`Patient with id ${id} not found.`);
    }

    await this.patientRepository.delete(id);
  }
}

export default DeletePatientService;
