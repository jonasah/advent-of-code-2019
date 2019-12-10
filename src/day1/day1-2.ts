import { PuzzleResult } from '../types/puzzle-result';
import { calculateFuel, calculateTotalFuel, getInputMasses } from './common';

export function calculateFuelWithAdditionalFuel(mass: number): number {
  const fuel = calculateFuel(mass);

  if (fuel <= 0) {
    return 0;
  }

  return fuel + calculateFuelWithAdditionalFuel(fuel);
}

export const day1_2 = (): PuzzleResult => ({
  day: 1,
  part: 2,
  message: 'Total fuel',
  answer: calculateTotalFuel(getInputMasses(), calculateFuelWithAdditionalFuel)
});
