import { calculateFuel, calculateTotalFuel, getInputMasses, writeResult } from './common';

export function day1_1() {
  const masses = getInputMasses();
  const totalFuel = calculateTotalFuel(masses, calculateFuel);
  writeResult(1, totalFuel);
}
