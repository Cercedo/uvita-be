import { PatientEntity } from '@/features/patient/domain/entities/patientEntity';
import { PatientRepository } from '@/features/patient/domain/repositories/patientRepository';

class PatientRepositoryImpl implements PatientRepository {
  private patients: PatientEntity[] = [
    {
      identifierType: 'NATIONAL_ID',
      sex: 'MALE',
      maritalStatus: null,
      insuranceType: 'PUBLIC',
      id: 1,
      firstName: 'John',
      middleName: 'Doe',
      patternalLastName: 'Doe',
      maternalLastName: 'Doe',
      identifier: '12345678',
      birthDate: new Date(),
      age: 30,
      address: '123 Main St',
      cellphone: '1234567890',
      email: 'john@uvita.com',
      isActive: true,
      code: '000-123456',
      isIdentified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      identifierType: 'NATIONAL_ID',
      sex: 'FEMALE',
      maritalStatus: null,
      insuranceType: 'PRIVATE',
      id: 2,
      firstName: 'Jane',
      middleName: 'Smith',
      patternalLastName: 'Smith',
      maternalLastName: 'Smith',
      identifier: '98765432',
      birthDate: new Date(),
      age: 25,
      address: '456 Elm St',
      cellphone: '0987654321',
      email: 'jane@uvita.com',
      isActive: true,
      code: '000-654321',
      isIdentified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  public async getAll(): Promise<PatientEntity[]> {
    return this.patients;
  }

  public async create(patient: PatientEntity): Promise<PatientEntity> {
    return patient;
  }

  public async getById(id: number): Promise<PatientEntity | null> {
    const filteredPatient = this.patients.find((patient) => {
      return patient.id === id;
    });

    const patient = filteredPatient
      ? (filteredPatient as PatientEntity)
      : null;

    return patient;
  }

  public async update(
    _id: number,
    data: PatientEntity
  ): Promise<PatientEntity> {
    return data;
  }

  public async delete(_id: number): Promise<void> {
    return;
  }
}

export default PatientRepositoryImpl;
