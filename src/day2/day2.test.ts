import { executeProgram } from './common';
import { getAnswer } from './day2-2';

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

describe('Day 2-2', () => {
  test.each([[12, 2, 1202]])('getAnswer(%i, %i)', (noun, verb, expected) => {
    const answer = getAnswer(noun, verb);
    expect(answer).toBe(expected);
  });
});
