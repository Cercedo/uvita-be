import { startGreeting } from '@/index';

describe('Start greeting', () => {
  test('Should return undefined', () => {
    const greeting = startGreeting();
    expect(greeting).toBeUndefined();
  });
});
