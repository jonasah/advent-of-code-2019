import { Program } from '../intcode';
import { day7_1, getMaxThrusterSignal, getThrusterSignal } from './day7-1';
import { day7_2 } from './day7-2';
import { testPrograms } from './day7.test-programs';

describe('Day 7-1', () => {
  test.each([
    [testPrograms[0], 43210],
    [testPrograms[1], 54321],
    [testPrograms[2], 65210]
  ])('getMaxThrusterSignal (#%#)', (program, expected) => {
    const signal = getMaxThrusterSignal(program as Program);
    expect(signal).toBe(expected);
  });

  test.each([
    [testPrograms[0], [4, 3, 2, 1, 0], 43210],
    [testPrograms[1], [0, 1, 2, 3, 4], 54321],
    [testPrograms[2], [1, 0, 4, 3, 2], 65210]
  ])('getThrusterSignal (#%#)', (program, phase, expected) => {
    const signal = getThrusterSignal(program as Program, phase as number[]);
    expect(signal).toBe(expected);
  });

  test('day7_1', () => {
    const { answer } = day7_1();
    expect(answer).toBe(51679);
  });
});

describe('Day 7-2', () => {
  test('day7_2', () => {
    const { answer } = day7_2();
    expect(answer).toBe('TODO');
  });
});
