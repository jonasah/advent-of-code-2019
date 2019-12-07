import { MaybeIntersection, Point, Segment } from './day3.types';

type TestCases<TInput, TResult> = ReadonlyArray<[TInput, TResult]>;
type TestCases2<TInput1, TInput2, TResult> = ReadonlyArray<[TInput1, TInput2, TResult]>;
type TestCases3<TInput1, TInput2, TInput3, TResult> = ReadonlyArray<
  [TInput1, TInput2, TInput3, TResult]
>;

export const parseSegmentTestCases: TestCases<
  string,
  { direction: string; length: number }
> = [
  ['U1', { direction: 'U', length: 1 }],
  ['D23', { direction: 'D', length: 23 }],
  ['L456', { direction: 'L', length: 456 }],
  ['R7890', { direction: 'R', length: 7890 }]
];

export const getSegmentEndpointTestCases: TestCases3<Point, string, number, Point> = [
  [{ x: 1, y: 2 }, 'U', 9, { x: 1, y: 11 }],
  [{ x: 4, y: 3 }, 'D', 11, { x: 4, y: -8 }],
  [{ x: 5, y: 6 }, 'L', 12, { x: -7, y: 6 }],
  [{ x: 8, y: 7 }, 'R', 17, { x: 25, y: 7 }]
];

export const segmentLengthTestCases: TestCases<Pick<Segment, 'p0' | 'p1'>, number> = [
  [{ p0: { x: 0, y: 0 }, p1: { x: 0, y: 0 } }, 0]
];

export const getIntersectionTestCases: TestCases2<Segment, Segment, MaybeIntersection> = [
  [
    // two horizontal segments
    { p0: { x: -1, y: 0 }, p1: { x: 1, y: 0 }, stepsBefore: 0 },
    { p0: { x: -1, y: 2 }, p1: { x: 1, y: 2 }, stepsBefore: 0 },
    {}
  ],
  [
    // two vertical segments
    { p0: { x: -1, y: -2 }, p1: { x: -1, y: 2 }, stepsBefore: 0 },
    { p0: { x: 1, y: -2 }, p1: { x: 1, y: 2 }, stepsBefore: 0 },
    {}
  ],
  [
    // intersecting segments
    { p0: { x: -2, y: 1 }, p1: { x: 5, y: 1 }, stepsBefore: 12 },
    { p0: { x: 4, y: -3 }, p1: { x: 4, y: 6 }, stepsBefore: 17 },
    { point: { x: 4, y: 1 }, steps: [18, 21] }
  ]
];

export const isHorizontalSegmentTestCases: TestCases<
  Pick<Segment, 'p0' | 'p1'>,
  boolean
> = [
  [{ p0: { x: 5, y: 9 }, p1: { x: 3, y: 9 } }, true],
  [{ p0: { x: 4, y: 1 }, p1: { x: 4, y: 8 } }, false]
];

export const getDistanceTestCases: TestCases<string[], number> = [
  [['R8,U5,L5,D3', 'U7,R6,D4,L4'], 6],
  [['R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83'], 159],
  [
    [
      'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
      'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
    ],
    135
  ]
];

export const getStepsTestCases: TestCases<string[], number> = [
  [['R8,U5,L5,D3', 'U7,R6,D4,L4'], 30],
  [['R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83'], 610],
  [
    [
      'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
      'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
    ],
    410
  ]
];
