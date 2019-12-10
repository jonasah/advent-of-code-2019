import { PuzzleResult } from '../types/puzzle-result';
import { getInputProgram, runProgram } from './common';

export const day2_1 = (): PuzzleResult => ({
  day: 2,
  part: 1,
  message: 'Output',
  answer: runProgram(getInputProgram(), 12, 2)
});
