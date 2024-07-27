import { PrismaClient } from '@prisma/client';

import { PatientEntity } from '@/features/patient/domain/entities/patientEntity';
import { PatientRepository } from '@/features/patient/domain/repositories/patientRepository';

class PatientRepositoryImpl implements PatientRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async getAll(): Promise<PatientEntity[]> {
    const patients = await this.prismaClient.patient.findMany();
    return patients;
  }

  public async create(data: PatientEntity): Promise<PatientEntity> {
    const patient = await this.prismaClient.patient.create({
      data: data,
    });
    return patient;
  }

  public async getById(id: number): Promise<PatientEntity | null> {
    const patient = this.prismaClient.patient.findUnique({
      where: {
        id: id,
      },
    });
    return patient;
  }

  public async update(
    id: number,
    data: PatientEntity
  ): Promise<PatientEntity> {
    const patient = await this.prismaClient.patient.update({
      where: {
        id: id,
      },
      data: data,
    });
    return patient;
  }

  public async delete(id: number): Promise<void> {
    await this.prismaClient.patient.delete({
      where: { id: id },
    });
    return;
  }
}

export default PatientRepositoryImpl;
