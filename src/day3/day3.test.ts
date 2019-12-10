import {
  getIntersection,
  getSegmentEndpoint,
  isHorizontalSegment,
  parseSegment,
  parseWire,
  segmentLength
} from './common';
import { day3_1, getDistance } from './day3-1';
import { day3_2, getSteps } from './day3-2';
import {
  getDistanceTestCases,
  getIntersectionTestCases,
  getSegmentEndpointTestCases,
  getStepsTestCases,
  isHorizontalSegmentTestCases,
  parseSegmentTestCases,
  segmentLengthTestCases
} from './day3.test-cases';

describe('Day 3', () => {
  test.each(parseSegmentTestCases)('parseSegment(%s)', (segment, expected) => {
    const direction = parseSegment(segment);
    expect(direction).toEqual(expected);
  });

  test.each(getSegmentEndpointTestCases)(
    'getSegmentEndpoint(%o, %s, %i)',
    (p0, direction, length, expected) => {
      const p1 = getSegmentEndpoint(p0, direction, length);
      expect(p1).toEqual(expected);
    }
  );

  test.each(segmentLengthTestCases)('segmentLength(%o)', (segment, expected) => {
    const result = segmentLength(segment);
    expect(result).toBe(expected);
  });

  test.each(getIntersectionTestCases)(
    'getIntersection(%o, %o)',
    (seg1, seg2, expected) => {
      const intersection = getIntersection(seg1, seg2);
      expect(intersection).toEqual(expected);
    }
  );

  test.each(isHorizontalSegmentTestCases)('isHorizontalSegment(%o)', (seg, expected) => {
    const isHorizontal = isHorizontalSegment(seg);
    expect(isHorizontal).toBe(expected);
  });
});

describe('Day 3-1', () => {
  test.each(getDistanceTestCases)('getDistance(%p)', (input, expected) => {
    const wires = input.map(i => parseWire(i));
    const distance = getDistance([wires[0], wires[1]]);
    expect(distance).toBe(expected);
  });

  test('day3_1', () => {
    const { answer } = day3_1();
    expect(answer).toBe(731);
  });
});

describe('Day 3-2', () => {
  test.each(getStepsTestCases)('getSteps(%p)', (input, expected) => {
    const wires = input.map(i => parseWire(i));
    const steps = getSteps([wires[0], wires[1]]);
    expect(steps).toBe(expected);
  });

  test('day3_2', () => {
    const { answer } = day3_2();
    expect(answer).toBe(5672);
  });
});
