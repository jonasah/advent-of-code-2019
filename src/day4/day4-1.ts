import { countValidPasswords } from './common';

export const day4_1 = () => countValidPasswords(1, twoAdjacentDigitsAreTheSame);

export const twoAdjacentDigitsAreTheSame = (password: number) =>
  password.toString().match(/(\d)\1/g) != null;
