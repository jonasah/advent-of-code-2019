import { getInput } from '../input/getInput';
import { Program } from '../intcode';

export function getInputProgram(): Program {
  return new Program(
    getInput(7)
      .split(',')
      .map(value => parseInt(value))
  );
}
