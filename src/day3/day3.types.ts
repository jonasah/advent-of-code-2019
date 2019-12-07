export interface Point {
  x: number;
  y: number;
}

export interface Segment {
  p0: Point;
  p1: Point;
  stepsBefore: number;
}

export type Wire = Segment[];

export interface MaybeIntersection {
  point?: Point;
  steps?: [number, number];
}
