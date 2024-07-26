import z from 'zod';

import {
  IDENTIFIER_TYPE_CHOICES,
  INSURANCE_TYPE,
  MARITAL_STATUS_CHOICES,
  SEX_CHOICES,
} from './constants';

const createPatientSchema = z.object({
  identifierType: z.enum(IDENTIFIER_TYPE_CHOICES).nullable(),
  sex: z.enum(SEX_CHOICES),
  maritalStatus: z.enum(MARITAL_STATUS_CHOICES).nullable(),
  insuranceType: z.enum(INSURANCE_TYPE),

  firstName: z.string().nullable(),
  middleName: z.string().nullable(),
  patternalLastName: z.string().nullable(),
  maternalLastName: z.string().nullable(),
  identifier: z.string().nullable(),
  birthDate: z.coerce.date().nullable(),
  address: z.string().nullable(),
  cellphone: z.string().nullable(),
  email: z.string().email().nullable(),
});

export default createPatientSchema;
