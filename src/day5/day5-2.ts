import { PuzzleResult } from '../types/puzzle-result';
import { getInputProgram } from './common';

export function day5_2(): PuzzleResult {
  const program = getInputProgram();

  const { outputs } = program.run(5);

  const testResults = outputs.slice(0, -1);

  if (!testResults.every(v => v === 0)) {
    throw new Error(`Diagnostics program failed: ${testResults}`);
  }

  return {
    day: 5,
    part: 2,
    message: 'Diagnostics code',
    answer: outputs.last()
  };
}
