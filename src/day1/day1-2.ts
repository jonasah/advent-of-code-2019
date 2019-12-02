import { calculateFuel, calculateTotalFuel, getInput, writeResult } from './common';

export function calculateFuelWithAdditionalFuel(mass: number): number {
  const fuel = calculateFuel(mass);

  if (fuel <= 0) {
    return 0;
  }

  return fuel + calculateFuelWithAdditionalFuel(fuel);
}

export function day1_2() {
  const masses = getInput();
  const totalFuel = calculateTotalFuel(masses, calculateFuelWithAdditionalFuel);
  writeResult(2, totalFuel);
}
