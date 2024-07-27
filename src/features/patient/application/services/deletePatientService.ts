import { ServiceInterface } from '@/features/interfaces';

import { PatientRepository } from '../../domain/repositories/patientRepository';

class DeletePatientService
  implements ServiceInterface<{ id: number }, Promise<void>>
{
  constructor(private patientRepository: PatientRepository) {}

  public async execute(params: { id: number }): Promise<void> {
    const { id } = params;

    try {
      await this.patientRepository.delete(id);
    } catch (error) {
      throw new Error(`Patient with id ${id} not found.`);
    }
  }
}

export default DeletePatientService;
