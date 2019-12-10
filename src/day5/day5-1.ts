import { PuzzleResult } from '../types/puzzle-result';
import { getInputProgram } from './common';

export function day5_1(): PuzzleResult {
  const program = getInputProgram();

  const { outputs } = program.run(1);

  const testResults = outputs.slice(0, -1);

  if (!testResults.every(v => v === 0)) {
    throw new Error(`Diagnostics program failed: ${testResults}`);
  }

  return {
    day: 5,
    part: 1,
    message: 'Diagnostics code',
    answer: outputs.last()
  };
}
