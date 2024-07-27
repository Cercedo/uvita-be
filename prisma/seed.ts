/* eslint-disable no-console */
import { Prisma, PrismaClient } from '@prisma/client';

const client = new PrismaClient();
const patientData: Prisma.PatientCreateInput[] = [
  {
    identifierType: 'NATIONAL_ID',
    sex: 'MALE',
    maritalStatus: null,
    insuranceType: 'PUBLIC',
    firstName: 'John',
    middleName: 'Doe',
    patternalLastName: 'Doe',
    maternalLastName: 'Doe',
    identifier: '12345678',
    birthDate: new Date('1999-09-10'),
    age: 25,
    address: '123 Main St',
    cellphone: '1234567890',
    email: 'john@uvita.com',
    isActive: true,
    code: '000-000000',
    isIdentified: true,
  },
  {
    identifierType: 'NATIONAL_ID',
    sex: 'FEMALE',
    maritalStatus: null,
    insuranceType: 'PRIVATE',
    firstName: 'Jane',
    middleName: 'Smith',
    patternalLastName: 'Smith',
    maternalLastName: 'Smith',
    identifier: '98765432',
    birthDate: new Date('2000-10-11'),
    age: 24,
    address: '456 Elm St',
    cellphone: '0987654321',
    email: 'jane@uvita.com',
    isActive: true,
    code: '000-000001',
    isIdentified: true,
  },
];

const main = async () => {
  console.log('🌱 Start seeding ...');

  for (const data of patientData) {
    const user = await client.patient.create({
      data: data,
    });
    console.log(`Patient with id ${user.id} created`);
  }

  console.log('🌱 Seeding finished.');
};

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (error) => {
    console.error('🚨 error: ', error);
    await client.$disconnect();
    process.exit(1);
  });
