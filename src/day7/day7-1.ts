import { Program } from '../intcode';
import { getPermutations } from '../math/math';
import { PuzzleResult } from '../types/puzzle-result';
import { getInputProgram } from './common';

export function day7_1(): PuzzleResult {
  return {
    day: 7,
    part: 1,
    message: 'Signal',
    answer: getMaxThrusterSignal(getInputProgram())
  };
}

export function getMaxThrusterSignal(program: Program): number {
  const signals = getPermutations(0, 1, 2, 3, 4).map(phases =>
    getThrusterSignal(program, phases)
  );

  return Math.max(...signals);
}

export function getThrusterSignal(program: Program, phases: number[]): number {
  return phases.reduce(
    (signal, phase) => program.run([phase, signal]).outputs.first(),
    0
  );
}
