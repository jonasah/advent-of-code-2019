export const minMax = (...values: number[]): [number, number] => [
  Math.min(...values),
  Math.max(...values)
];

export const manhattanDistance = (point: { x: number; y: number }) =>
  Math.abs(point.x) + Math.abs(point.y);
