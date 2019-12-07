import { getInputWires, getIntersection } from './common';
import { Wire } from './day3.types';

export function day3_2() {
  const wires = getInputWires();

  const steps = getSteps(wires);

  console.log(`(3-2) Steps: ${steps}`);
}

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
