import { PuzzleResult } from '../types/puzzle-result';
import { getInputWires, getIntersection } from './common';
import { Wire } from './day3.types';

export const day3_2 = (): PuzzleResult => ({
  day: 3,
  part: 2,
  message: 'Steps',
  answer: getSteps(getInputWires())
});

export function getSteps(wires: [Wire, Wire]): number {
  const [wire1, wire2] = wires;
  const candidates: number[] = [];

  for (const s1 of wire1) {
    for (const s2 of wire2) {
      const { steps } = getIntersection(s1, s2);

      if (steps != null) {
        candidates.push(steps.first() + steps.last());
      }
    }
  }

  return Math.min(...candidates);
}
