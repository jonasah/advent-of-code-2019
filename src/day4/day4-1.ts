import { PuzzleResult } from '../types/puzzle-result';
import { countValidPasswords } from './common';

export const day4_1 = (): PuzzleResult => ({
  day: 4,
  challenge: 1,
  message: 'Valid passwords',
  answer: countValidPasswords(twoAdjacentDigitsAreTheSame)
});

export const twoAdjacentDigitsAreTheSame = (password: number) =>
  password.toString().match(/(\d)\1/g) != null;
