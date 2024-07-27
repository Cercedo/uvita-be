import { ServiceInterface } from '@/features/interfaces';

class CalculatePatientAgeService
  implements
    ServiceInterface<{ birthDate: Date | string | null }, number | null>
{
  public execute(params: { birthDate: Date | string | null }): number | null {
    const { birthDate } = params;
    let age = null;

    if (!birthDate) {
      return age;
    }
    age = this.calculateAge(birthDate);

    return age;
  }

  private calculateAge(birthDate: Date | string): number {
    const today = new Date();
    const fixedBirthDate = new Date(birthDate);

    let age = today.getFullYear() - fixedBirthDate.getFullYear();
    const monthDifference = today.getMonth() - fixedBirthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < fixedBirthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
}

export default CalculatePatientAgeService;
