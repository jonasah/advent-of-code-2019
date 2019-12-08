import '../common/array-extensions';
import { countValidPasswords } from './common';

export const day4_2 = () => countValidPasswords(2, exactlyTwoAdjacentDigitsAreTheSame);

export const exactlyTwoAdjacentDigitsAreTheSame = (password: number) =>
  (password.toString().match(/(\d)\1+/g) || []).reduce(
    (acc, current) => acc || current.length === 2,
    false
  );
