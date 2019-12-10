import { PuzzleResult } from '../types/puzzle-result';
import { buildOrbitMap, findSpaceObjectOnMap, getInputMapData } from './common';
import { OrbitMap, SpaceObject } from './day6.types';

export function day6_2(): PuzzleResult {
  return {
    day: 6,
    part: 2,
    message: 'Transfers',
    answer: getNumOrbitalTransfers(buildOrbitMap(getInputMapData()), 'YOU', 'SAN')
  };
}

export function getNumOrbitalTransfers(map: OrbitMap, from: string, to: string): number {
  const fromObject = findSpaceObjectOnMap(map, from);
  const toObject = findSpaceObjectOnMap(map, to);

  if (fromObject == null || toObject == null) {
    throw new Error(`Failed to find space object ${from} and/or ${to}`);
  }

  const fromOrbitsObject = fromObject.getOrbits();
  const toOrbitsObject = toObject.getOrbits();

  if (fromOrbitsObject == null || toOrbitsObject == null) {
    throw new Error(`${from} and/or ${to} does not orbit anything`);
  }

  const distances = getCommonSpaceObjectsInOrbitChain(
    fromOrbitsObject,
    toOrbitsObject
  ).map(
    so =>
      distanceToSpaceObjectInOrbitChain(fromOrbitsObject, so) +
      distanceToSpaceObjectInOrbitChain(toOrbitsObject, so)
  );

  return Math.min(...distances);
}

export function getCommonSpaceObjectsInOrbitChain(
  spaceObject1: SpaceObject,
  spaceObject2: SpaceObject
): SpaceObject[] {
  const chain1 = spaceObject1.getOrbitChain();
  const chain2 = spaceObject2.getOrbitChain();

  const commonObjects: SpaceObject[] = [];

  for (const so1 of chain1) {
    for (const so2 of chain2) {
      if (so1 === so2) {
        commonObjects.push(so1);
      }
    }
  }

  return commonObjects;
}

export function distanceToSpaceObjectInOrbitChain(
  from: SpaceObject,
  to: SpaceObject
): number {
  return from.getNumOrbits() - to.getNumOrbits();
}
