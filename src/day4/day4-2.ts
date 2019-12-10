import { PuzzleResult } from '../types/puzzle-result';
import { countValidPasswords } from './common';

export const day4_2 = (): PuzzleResult => ({
  day: 4,
  part: 2,
  message: 'Valid passwords',
  answer: countValidPasswords(exactlyTwoAdjacentDigitsAreTheSame)
});

export const exactlyTwoAdjacentDigitsAreTheSame = (password: number) =>
  (password.toString().match(/(\d)\1+/g) ?? []).reduce(
    (acc, current) => acc || current.length === 2,
    false
  );
