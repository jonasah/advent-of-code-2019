import { calculateFuel, calculateTotalFuel } from './common';
import { calculateFuelWithAdditionalFuel } from './day1-2';

describe('Day 1', () => {
  test.each([
    [12, 2],
    [14, 2],
    [1969, 654],
    [100756, 33583]
  ])('calculateFuel(%i)', (mass, expected) => {
    const fuel = calculateFuel(mass);
    expect(fuel).toBe(expected);
  });
});

describe('Day 1-1', () => {
  test('calculateTotalFuel', () => {
    const totalFuel = calculateTotalFuel([12, 14, 1969, 100756], calculateFuel);
    expect(totalFuel).toBe(34241);
  });
});

describe('Day 1-2', () => {
  test.each([
    [14, 2],
    [1969, 966],
    [100756, 50346]
  ])('calculateFuelWithAdditionalFuel(%i)', (mass, expected) => {
    const fuel = calculateFuelWithAdditionalFuel(mass);
    expect(fuel).toBe(expected);
  });

  test('calculateTotalFuel', () => {
    const totalFuel = calculateTotalFuel(
      [14, 1969, 100756],
      calculateFuelWithAdditionalFuel
    );
    expect(totalFuel).toBe(51314);
  });
});
