import { manhattanDistance } from '../common/math';
import { getInputWires, getIntersection } from './common';
import { Wire } from './day3.types';

export function day3_1() {
  const wires = getInputWires();

  const distance = getDistance(wires);

  console.log(`(3-1) Distance: ${distance}`);
}

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
