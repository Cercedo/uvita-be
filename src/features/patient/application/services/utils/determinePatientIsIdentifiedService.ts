import { ServiceInterface } from '@/features/interfaces';
import { PatientEntity } from '@/features/patient/domain/entities/patientEntity';

class DeterminePatientIsIdentifiedService
  implements ServiceInterface<{ patient: PatientEntity }, boolean>
{
  public execute(params: { patient: PatientEntity }): boolean {
    const { patient } = params;
    let isIdentified = false;

    if (
      (patient.identifierType && patient.identifier) ||
      (patient.firstName &&
        patient.patternalLastName &&
        patient.maternalLastName)
    ) {
      isIdentified = true;
    }

    return isIdentified;
  }
}

export default DeterminePatientIsIdentifiedService;
