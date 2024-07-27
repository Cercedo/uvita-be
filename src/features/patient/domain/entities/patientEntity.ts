import {
  IdentifierTypeChoices,
  InsuranceTypeChoices,
  MaritalStatusChoices,
  SexChoices,
} from './types';

export interface PatientEntity {
  // Choices
  identifierType: IdentifierTypeChoices | null;
  sex: SexChoices;
  maritalStatus: MaritalStatusChoices | null;
  insuranceType: InsuranceTypeChoices;

  // Fields
  //// Personal data
  id: number;
  firstName: string | null;
  middleName: string | null;
  patternalLastName: string | null;
  maternalLastName: string | null;
  identifier: string | null;
  birthDate: Date | string | null;
  age: number | null;
  address: string | null;
  cellphone: string | null;
  email: string | null;
  isActive: boolean;
  //// Medical data
  code: string;
  isIdentified: boolean;

  // Meta
  createdAt: Date;
  updatedAt: Date;
}
