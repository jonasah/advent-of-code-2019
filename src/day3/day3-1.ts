import { manhattanDistance } from '../math/math';
import { PuzzleResult } from '../types/puzzle-result';
import { getInputWires, getIntersection } from './common';
import { Wire } from './day3.types';

export const day3_1 = (): PuzzleResult => ({
  day: 3,
  challenge: 1,
  message: 'Distance',
  answer: getDistance(getInputWires())
});

export function getDistance(wires: [Wire, Wire]): number {
  const [wire1, wire2] = wires;
  const candidates: number[] = [];

  for (const s1 of wire1) {
    for (const s2 of wire2) {
      const { point } = getIntersection(s1, s2);

      if (point != null) {
        candidates.push(manhattanDistance(point));
      }
    }
  }

  return Math.min(...candidates);
}
