import { PuzzleResult } from '../types/puzzle-result';
import { getInputProgram } from './common';

export const day2_1 = (): PuzzleResult => ({
  day: 2,
  part: 1,
  message: 'Output',
  answer: getInputProgram().run({ noun: 12, verb: 2 }).output
});
