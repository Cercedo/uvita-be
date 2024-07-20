import { randomUUID } from 'crypto';

export const getRandomId = (): string => randomUUID();

export const sumNumbers = (...values: number[]): number =>
  values.reduce(
    (accumulator: number, value: number) => accumulator + value,
    0
  );

export const startGreeting = () => {
  console.log('🧩 Hello world :)');

  const id = getRandomId();
  console.log("- 🔑 Here's a random ID: ", id);

  const numbers = [1, 2, 3, 4, 5];
  const sum = sumNumbers(...numbers);
  console.log(`- 🧮 Sum of numbers ${numbers.join(', ')} equal to ${sum}`);
};
