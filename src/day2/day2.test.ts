import { day2_1 } from './day2-1';
import { day2_2, getAnswer } from './day2-2';

describe('Day 2-1', () => {
  test('day2_1', () => {
    const { answer } = day2_1();
    expect(answer).toBe(5866663);
  });
});

describe('Day 2-2', () => {
  test.each([[12, 2, 1202]])('getAnswer(%i, %i)', (noun, verb, expected) => {
    const answer = getAnswer(noun, verb);
    expect(answer).toBe(expected);
  });

  test('day2_2', () => {
    const { answer } = day2_2();
    expect(answer).toBe(4259);
  });
});
