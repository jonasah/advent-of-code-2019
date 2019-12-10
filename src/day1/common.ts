import { getInput } from '../input/getInput';

export function getInputMasses(): number[] {
  return getInput(1)
    .split('\n')
    .map(mass => parseInt(mass));
}

export function calculateFuel(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

export function calculateTotalFuel(
  masses: number[],
  fuelFunction: (mass: number) => number
) {
  return masses.reduce((sum, current) => sum + fuelFunction(current), 0);
}

export function writeResult(challenge: number, totalFuel: number) {
  console.log(`(1-${challenge}) Total fuel: ${totalFuel}`);
}
