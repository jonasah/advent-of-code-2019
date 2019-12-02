import fs from 'fs';
import path from 'path';

export function getInput(): number[] {
  return fs
    .readFileSync(path.join(__dirname, 'day1-input.txt'), 'utf-8')
    .split('\n')
    .filter(line => !!line)
    .map(line => parseInt(line.trim()));
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
