import { getInput } from '../input/getInput';
import { MapData, OrbitMap, SpaceObject } from './day6.types';

export function getInputMapData(): MapData {
  return getInput(6)
    .split('\n')
    .map(entry => entry.trim())
    .map(entry => {
      const [orbits, name] = entry.split(')');
      return { name, orbits };
    });
}

export function buildOrbitMap(mapData: MapData): OrbitMap {
  const map: OrbitMap = [];

  const getOrCreate = (name: string): SpaceObject => {
    let spaceObject = findSpaceObjectOnMap(map, name);

    if (spaceObject == null) {
      spaceObject = new SpaceObject(name);
      map.push(spaceObject);
    }

    return spaceObject;
  };

  mapData.forEach(entry => {
    const { name, orbits } = entry;

    const spaceObject = getOrCreate(name);
    const orbitsObject = getOrCreate(orbits);

    spaceObject.orbits(orbitsObject);
  });

  return map;
}

export const findSpaceObjectOnMap = (map: OrbitMap, name: string) =>
  map.find(spaceObject => spaceObject.name === name);
