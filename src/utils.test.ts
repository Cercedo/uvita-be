import { getRandomId, startGreeting, sumNumbers } from './utils';

describe('Get random ID', () => {
  test('Should return a string', () => {
    const id = getRandomId();
    expect(typeof id).toBe('string');
  });

  test('Should return a different string each time', () => {
    const id1 = getRandomId();
    const id2 = getRandomId();
    expect(id1).not.toBe(id2);
  });
});

describe('Sum numbers', () => {
  test('Should return the sum of all numbers', () => {
    const sum = sumNumbers(1, 2, 3, 4, 5);
    expect(sum).toBe(15);
  });

  test('Should return 0 when no numbers are provided', () => {
    const sum = sumNumbers();
    expect(sum).toBe(0);
  });

  test('Should return the same number when only one number is provided', () => {
    const sum = sumNumbers(64);
    expect(sum).toBe(64);
  });
});

describe('Start greeting', () => {
  test('Should return undefined', () => {
    const greeting = startGreeting();
    expect(greeting).toBeUndefined();
  });
});
