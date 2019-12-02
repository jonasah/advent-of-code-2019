import { calculateFuel, calculateTotalFuel, getInput, writeResult } from './common';

export async function day1_1() {
  const masses = getInput();
  const totalFuel = calculateTotalFuel(masses, calculateFuel);
  writeResult(1, totalFuel);
}
