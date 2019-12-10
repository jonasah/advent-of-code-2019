import { buildOrbitMap, findSpaceObjectOnMap } from './common';
import { day6_1, getTotalNumOrbits } from './day6-1';
import {
  day6_2,
  distanceToSpaceObjectInOrbitChain,
  getCommonSpaceObjectsInOrbitChain,
  getNumOrbitalTransfers
} from './day6-2';
import { MapData, OrbitMap, SpaceObject } from './day6.types';

describe('Day 6', () => {
  const testMapData: MapData = [
    { name: 'B', orbits: 'COM' },
    { name: 'C', orbits: 'B' },
    { name: 'D', orbits: 'C' },
    { name: 'E', orbits: 'D' },
    { name: 'F', orbits: 'E' },
    { name: 'G', orbits: 'B' },
    { name: 'H', orbits: 'G' },
    { name: 'I', orbits: 'D' },
    { name: 'J', orbits: 'E' },
    { name: 'K', orbits: 'J' },
    { name: 'L', orbits: 'K' }
  ];

  let map: OrbitMap;

  beforeAll(() => {
    map = buildOrbitMap(testMapData);
  });

  test('buildOrbitMap', () => {
    const D = findSpaceObjectOnMap(map, 'D') as SpaceObject;
    const L = findSpaceObjectOnMap(map, 'L') as SpaceObject;
    const COM = findSpaceObjectOnMap(map, 'COM') as SpaceObject;

    expect(D.getNumOrbits()).toBe(3);
    expect(L.getNumOrbits()).toBe(7);
    expect(COM.getNumOrbits()).toBe(0);
  });
});

describe('Day 6-1', () => {
  const testMapData: MapData = [
    { name: 'B', orbits: 'COM' },
    { name: 'C', orbits: 'B' },
    { name: 'D', orbits: 'C' },
    { name: 'E', orbits: 'D' },
    { name: 'F', orbits: 'E' },
    { name: 'G', orbits: 'B' },
    { name: 'H', orbits: 'G' },
    { name: 'I', orbits: 'D' },
    { name: 'J', orbits: 'E' },
    { name: 'K', orbits: 'J' },
    { name: 'L', orbits: 'K' }
  ];

  let map: OrbitMap;

  beforeAll(() => {
    map = buildOrbitMap(testMapData);
  });

  test('getTotalNumOrbits', () => {
    const totalNumOrbits = getTotalNumOrbits(map);
    expect(totalNumOrbits).toBe(42);
  });

  test('day6_1', () => {
    const { answer } = day6_1();
    expect(answer).toBe(621125);
  });
});

describe('Day 6-2', () => {
  const testMapData: MapData = [
    { name: 'B', orbits: 'COM' },
    { name: 'C', orbits: 'B' },
    { name: 'D', orbits: 'C' },
    { name: 'E', orbits: 'D' },
    { name: 'F', orbits: 'E' },
    { name: 'G', orbits: 'B' },
    { name: 'H', orbits: 'G' },
    { name: 'I', orbits: 'D' },
    { name: 'J', orbits: 'E' },
    { name: 'K', orbits: 'J' },
    { name: 'L', orbits: 'K' },
    { name: 'YOU', orbits: 'K' },
    { name: 'SAN', orbits: 'I' }
  ];

  let map: OrbitMap;

  beforeAll(() => {
    map = buildOrbitMap(testMapData);
  });

  test.each([['YOU', 'SAN', 4]])(
    'getNumOrbitalTransfers(%s, %s)',
    (from, to, expected) => {
      const totalNumOrbits = getNumOrbitalTransfers(map, from as string, to as string);
      expect(totalNumOrbits).toBe(expected);
    }
  );

  test.each([['YOU', 'SAN', ['COM', 'B', 'C', 'D']]])(
    'getCommonSpaceObjectsInOrbitChain(%s, %s)',
    (objName1, objName2, expected) => {
      const obj1 = findSpaceObjectOnMap(map, objName1 as string) as SpaceObject;
      const obj2 = findSpaceObjectOnMap(map, objName2 as string) as SpaceObject;
      const intersections = getCommonSpaceObjectsInOrbitChain(obj1, obj2).map(
        so => so.name
      );
      expect(intersections).toEqual(expected);
    }
  );

  test.each([
    ['YOU', 'D', 4],
    ['SAN', 'D', 2]
  ])('distanceToSpaceObjectInOrbitChain(%s, %s)', (fromName, toName, expected) => {
    const fromObject = findSpaceObjectOnMap(map, fromName as string) as SpaceObject;
    const toObject = findSpaceObjectOnMap(map, toName as string) as SpaceObject;
    const distance = distanceToSpaceObjectInOrbitChain(fromObject, toObject);
    expect(distance).toBe(expected);
  });

  test('day6_2', () => {
    const { answer } = day6_2();
    expect(answer).toBe(550);
  });
});
