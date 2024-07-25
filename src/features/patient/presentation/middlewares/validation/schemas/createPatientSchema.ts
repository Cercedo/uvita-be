import z from 'zod';

const IDENTIFIER_TYPE_CHOICES = [
  'OTHER',
  'NATIONAL_ID',
  'PASSPORT',
  'DRIVER_LICENSE',
] as const;
const SEX_CHOICES = ['MALE', 'FEMALE'] as const;
const MARITAL_STATUS_CHOICES = [
  'SINGLE',
  'MARRIED',
  'DIVORCED',
  'WIDOWED',
  'SEPARATED',
] as const;
const INSURANCE_TYPE = ['PUBLIC', 'PRIVATE', 'NONE'] as const;

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
  isIdentified: z.boolean(),
});

export default createPatientSchema;
