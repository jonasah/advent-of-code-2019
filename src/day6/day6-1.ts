import { PuzzleResult } from '../types/puzzle-result';
import { buildOrbitMap, getInputMapData } from './common';
import { OrbitMap } from './day6.types';

export function day6_1(): PuzzleResult {
  return {
    day: 6,
    part: 1,
    message: 'Orbits',
    answer: getTotalNumOrbits(buildOrbitMap(getInputMapData()))
  };
}

export const getTotalNumOrbits = (map: OrbitMap) =>
  map.reduce((prev, current) => prev + current.getNumOrbits(), 0);
