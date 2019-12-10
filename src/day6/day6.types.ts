export interface MapEntry {
  name: string;
  orbits: string;
}

export type MapData = MapEntry[];

export type OrbitMap = SpaceObject[];

export class SpaceObject {
  private orbitsObject?: SpaceObject;

  constructor(public readonly name: string) {}

  public orbits(spaceObject: SpaceObject) {
    this.orbitsObject = spaceObject;
  }

  public getOrbits() {
    return this.orbitsObject;
  }

  public getNumOrbits(): number {
    if (this.orbitsObject == null) {
      return 0;
    }

    return this.orbitsObject.getNumOrbits() + 1;
  }

  public getOrbitChain(): SpaceObject[] {
    if (this.orbitsObject == null) {
      return [this];
    }

    return [...this.orbitsObject.getOrbitChain(), this];
  }

  public printOrbitChain() {
    console.log(
      this.getOrbitChain()
        .map(obj => obj.name)
        .join(' - ')
    );
  }
}
