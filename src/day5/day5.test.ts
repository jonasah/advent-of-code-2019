import { day5_1 } from './day5-1';
import { day5_2 } from './day5-2';

describe('Day 5-1', () => {
  test('day5_1', () => {
    const { answer } = day5_1();
    expect(answer).toBe(16434972);
  });
});

describe('Day 5-2', () => {
  test('day5_2', () => {
    const { answer } = day5_2();
    expect(answer).toBe(16694270);
  });
});
