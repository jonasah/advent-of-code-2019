import { getInputProgram, runProgram } from './common';

export function day2_2() {
  const program = getInputProgram();

  for (let noun = 0; noun <= 99; ++noun) {
    for (let verb = 0; verb <= 99; ++verb) {
      const output = runProgram(program, noun, verb);

      if (output === 19690720) {
        const answer = getAnswer(noun, verb);
        console.log(`(2-2) Noun: ${noun}. Verb: ${verb}. Answer: ${answer}`);
        return;
      }
    }
  }

  console.error(`(2-2) Found no answer`);
}

export const getAnswer = (noun: number, verb: number) => 100 * noun + verb;
