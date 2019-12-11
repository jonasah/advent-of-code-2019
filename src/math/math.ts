export const minMax = (...values: number[]): [number, number] => [
  Math.min(...values),
  Math.max(...values)
];

export const manhattanDistance = (point: { x: number; y: number }) =>
  Math.abs(point.x) + Math.abs(point.y);

export function getPermutations(...values: number[]): number[][] {
  const gen = (prev: number[][], value: number): number[][] => {
    const permutations: number[][] = [];
    const size = prev.first().length + 1;

    prev.forEach(prev => {
      permutations.push(
        ...new Array<number[]>(size).fill(prev).map((prev, i) => {
          const perm = [...prev];
          perm.splice(i, 0, value);
          return perm;
        })
      );
    });

    return permutations;
  };

  return values.reduce(gen, [[]] as number[][]);
}
