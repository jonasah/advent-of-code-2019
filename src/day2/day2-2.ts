import { PuzzleResult } from '../types/puzzle-result';
import { getInputProgram, runProgram } from './common';

export function day2_2(): PuzzleResult {
  const program = getInputProgram();

  for (let noun = 0; noun <= 99; ++noun) {
    for (let verb = 0; verb <= 99; ++verb) {
      const output = runProgram(program, noun, verb);

      if (output === 19690720) {
        return {
          day: 2,
          challenge: 2,
          message: `Noun: ${noun}. Verb: ${verb}. Answer`,
          answer: getAnswer(noun, verb)
        };
      }
    }
  }

  throw new Error('Found no answer');
}

export const getAnswer = (noun: number, verb: number) => 100 * noun + verb;
