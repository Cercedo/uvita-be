import { getRandomId, sumNumbers } from '@/utils';

export const startGreeting = () => {
  console.log('🧩 Hello world :)');

  const id = getRandomId();
  console.log("- 🔑 Here's a random ID: ", id);

  const numbers = [1, 2, 3, 4, 5];
  const sum = sumNumbers(...numbers);
  console.log(`- 🧮 Sum of numbers ${numbers.join(', ')} equal to ${sum}`);
};

startGreeting();
