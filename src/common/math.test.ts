import { manhattanDistance, minMax } from './math';

describe('math', () => {
  test.each([
    [[3], [3, 3]],
    [
      [7, 3, 9, 8],
      [3, 9]
    ]
  ])('minMax(%p)', (values, expected) => {
    const result = minMax(...values);
    expect(result).toEqual(expected);
  });

  test.each([
    [{ x: 1, y: 2 }, 3],
    [{ x: 3, y: -4 }, 7],
    [{ x: -5, y: 6 }, 11],
    [{ x: -7, y: -8 }, 15]
  ])('manhattanDistance(%o)', (point, expected) => {
    const result = manhattanDistance(point as { x: number; y: number });
    expect(result).toBe(expected);
  });
});
