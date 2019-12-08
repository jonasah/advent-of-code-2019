import { isValidPasswordIgnoringRange } from './common';
import { twoAdjacentDigitsAreTheSame } from './day4-1';
import { exactlyTwoAdjacentDigitsAreTheSame } from './day4-2';

describe('Day 4-1', () => {
  test.each([
    [111111, true],
    [223450, false],
    [123789, false]
  ])('isValidPasswordIgnoringRange(%i)', (password, expected) => {
    const result = isValidPasswordIgnoringRange(
      password as number,
      twoAdjacentDigitsAreTheSame
    );
    expect(result).toBe(expected);
  });
});

describe('Day 4-2', () => {
  test.each([
    [112233, true],
    [123444, false],
    [111122, true]
  ])('isValidPasswordIgnoringRange(%i)', (password, expected) => {
    const result = isValidPasswordIgnoringRange(
      password as number,
      exactlyTwoAdjacentDigitsAreTheSame
    );
    expect(result).toBe(expected);
  });
});
