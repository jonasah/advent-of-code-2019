import { executeProgram } from './common';
import { day2_1 } from './day2-1';
import { day2_2, getAnswer } from './day2-2';

describe('Day 2', () => {
  test.each([
    [
      [1, 0, 0, 0, 99],
      [2, 0, 0, 0, 99]
    ],
    [
      [2, 3, 0, 3, 99],
      [2, 3, 0, 6, 99]
    ],
    [
      [2, 4, 4, 5, 99, 0],
      [2, 4, 4, 5, 99, 9801]
    ],
    [
      [1, 1, 1, 4, 99, 5, 6, 0, 99],
      [30, 1, 1, 4, 2, 5, 6, 0, 99]
    ]
  ])('executeProgram(%p)', (program, expected) => {
    const memory = executeProgram(program);
    expect(memory).toEqual(expected);
  });
});

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
