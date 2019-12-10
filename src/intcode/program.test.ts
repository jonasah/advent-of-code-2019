import { Program } from '.';
import { testPrograms } from './program.test-programs';

describe('Program', () => {
  test.each([
    [
      [1, 0, 0, 0, 99],
      [2, 0, 0, 0, 99]
    ],
    [
      [2, 3, 0, 3, 99],
      [2, 3, 0, 6, 99]
    ],
    [
      [2, 4, 4, 5, 99, 0],
      [2, 4, 4, 5, 99, 9801]
    ],
    [
      [1, 1, 1, 4, 99, 5, 6, 0, 99],
      [30, 1, 1, 4, 2, 5, 6, 0, 99]
    ],
    [
      [1101, 100, -1, 4, 0],
      [1101, 100, -1, 4, 99]
    ]
  ])('memory (%p)', (code, expected) => {
    const { memory } = new Program(code).run();
    expect(memory).toEqual(expected);
  });

  test.each([
    [testPrograms.jumpIfTrue, -5, [1]],
    [testPrograms.jumpIfTrue, 0, [0]],
    [testPrograms.jumpIfTrue, 4, [1]],
    [testPrograms.jumpIfFalse, -7, [1]],
    [testPrograms.jumpIfFalse, 0, [0]],
    [testPrograms.jumpIfFalse, 8, [1]]
  ])('jumps (#%#)', (program, input, expected) => {
    const { outputs } = (program as Program).run(input as number);
    expect(outputs).toEqual(expected);
  });

  test.each([
    [testPrograms.lessThanPosition, 13, [0]],
    [testPrograms.lessThanPosition, 8, [0]],
    [testPrograms.lessThanPosition, 5, [1]],
    [testPrograms.lessThanImmediate, 13, [0]],
    [testPrograms.lessThanImmediate, 8, [0]],
    [testPrograms.lessThanImmediate, 5, [1]],
    [testPrograms.equalsPosition, 13, [0]],
    [testPrograms.equalsPosition, 8, [1]],
    [testPrograms.equalsPosition, 5, [0]],
    [testPrograms.equalsImmediate, 13, [0]],
    [testPrograms.equalsImmediate, 8, [1]],
    [testPrograms.equalsImmediate, 5, [0]]
  ])('comparisons (#%#)', (program, input, expected) => {
    const { outputs } = (program as Program).run(input as number);
    expect(outputs).toEqual(expected);
  });

  test.each([
    [testPrograms.large, 3, [999]],
    [testPrograms.large, 8, [1000]],
    [testPrograms.large, 13, [1001]]
  ])('jumps and comparisons (#%#)', (program, input, expected) => {
    const { outputs } = (program as Program).run(input as number);
    expect(outputs).toEqual(expected);
  });
});
