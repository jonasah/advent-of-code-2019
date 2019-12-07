import '../common/array-extensions';
import { getInput } from '../common/getInput';
import { manhattanDistance, minMax } from '../common/math';
import { MaybeIntersection, Point, Segment, Wire } from './day3.types';

export function getInputWires(): [Wire, Wire] {
  const wires = getInput(3)
    .split('\n')
    .map(inputWire => parseWire(inputWire));

  if (wires.length !== 2) {
    throw new Error(`Invalid input: Found ${wires.length} wires`);
  }

  return [wires.first(), wires.last()];
}

const origin: Point = { x: 0, y: 0 };

export function parseWire(s: string): Wire {
  return s.split(',').reduce(
    (wire: Wire, segment) => {
      const { direction, length } = parseSegment(segment);

      const p0 = wire.last().p1;
      const p1 = getSegmentEndpoint(p0, direction, length);
      const stepsBefore = wire.last().stepsBefore + segmentLength(wire.last());

      wire.push({ p0, p1, stepsBefore });
      return wire;
    },
    [{ p0: origin, p1: origin, stepsBefore: 0 }]
  );
}

export function parseSegment(s: string): { direction: string; length: number } {
  const direction = s.substring(0, 1);
  const length = parseInt(s.substring(1));
  return { direction, length };
}

export function getSegmentEndpoint(p0: Point, direction: string, length: number): Point {
  switch (direction) {
    case 'U':
      return { ...p0, y: p0.y + length };
    case 'D':
      return { ...p0, y: p0.y - length };
    case 'L':
      return { ...p0, x: p0.x - length };
    case 'R':
      return { ...p0, x: p0.x + length };
  }

  throw new Error(`Invalid direction: ${direction}`);
}

export function segmentLength(segment: Pick<Segment, 'p0' | 'p1'>): number {
  const { p0, p1 } = segment;
  // Segment length is same as manhattan distance since segment is
  // either horizontal or vertical.
  return manhattanDistance({ x: p1.x - p0.x, y: p1.y - p0.y });
}

export function getIntersection(seg1: Segment, seg2: Segment): MaybeIntersection {
  // Assume one segment is horizontal and one is vertical.
  // Intersection check will work even if that is not the case.
  const [horizSeg, vertSeg] = isHorizontalSegment(seg1) ? [seg1, seg2] : [seg2, seg1];

  const [minX, maxX] = minMax(horizSeg.p0.x, horizSeg.p1.x);
  const [minY, maxY] = minMax(vertSeg.p0.y, vertSeg.p1.y);

  if (
    minX < vertSeg.p0.x &&
    maxX > vertSeg.p0.x &&
    minY < horizSeg.p0.y &&
    maxY > horizSeg.p0.y
  ) {
    const intersectionPoint: Point = {
      x: vertSeg.p0.x,
      y: horizSeg.p0.y
    };
    const steps: [number, number] = [
      seg1.stepsBefore + segmentLength({ p0: seg1.p0, p1: intersectionPoint }),
      seg2.stepsBefore + segmentLength({ p0: seg2.p0, p1: intersectionPoint })
    ];

    return {
      point: intersectionPoint,
      steps
    };
  }

  return {};
}

export const isHorizontalSegment = (segment: Pick<Segment, 'p0' | 'p1'>): boolean =>
  segment.p0.y === segment.p1.y;
