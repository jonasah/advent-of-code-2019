import { getInput } from '../input/getInput';

export function countValidPasswords(adjacentRule: (password: number) => boolean): number {
  const range = getInputRange();

  let validPasswords = 0;

  for (let password = range.first(); password < range.last(); ++password) {
    if (isValidPasswordIgnoringRange(password, adjacentRule)) {
      ++validPasswords;
    }
  }

  return validPasswords;
}

export function getInputRange(): [number, number] {
  const values = getInput(4)
    .split('-')
    .map(value => parseInt(value));

  return [values.first(), values.last() + 1];
}

export function isValidPasswordIgnoringRange(
  password: number,
  adjacentRule: (password: number) => boolean
): boolean {
  return (
    isSixDigitNumber(password) && adjacentRule(password) && digitsNeverDecrease(password)
  );
}

const isSixDigitNumber = (password: number) => isInRange(password, [1e5, 1e6]);

function digitsNeverDecrease(password: number): boolean {
  const { isValid } = password
    .toString()
    .split('')
    .reduce(
      (prev, current) => ({
        digit: current,
        isValid: prev.isValid && current >= prev.digit
      }),
      { digit: '0', isValid: true }
    );

  return isValid;
}

const isInRange = (password: number, range: [number, number]) =>
  password >= range.first() && password < range.last();
