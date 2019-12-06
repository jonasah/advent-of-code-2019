import { getInputProgram, runProgram } from './common';

export function day2_1() {
  const program = getInputProgram();

  const output = runProgram(program, 12, 2);

  console.log(`(2-1) Output: ${output}`);
}
