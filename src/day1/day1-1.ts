import { PuzzleResult } from '../types/puzzle-result';
import { calculateFuel, calculateTotalFuel, getInputMasses } from './common';

export const day1_1 = (): PuzzleResult => ({
  day: 1,
  part: 1,
  message: 'Total fuel',
  answer: calculateTotalFuel(getInputMasses(), calculateFuel)
});
