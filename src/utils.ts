import { randomUUID } from 'crypto';

export const getRandomId = (): string => randomUUID();

export const sumNumbers = (...values: number[]): number =>
  values.reduce(
    (accumulator: number, value: number) => accumulator + value,
    0
  );
