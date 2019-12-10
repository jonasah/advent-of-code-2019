import { getParameterValues, parseOpcode, parseParameterModes } from './helpers';
import { Opcode, ParameterMode } from './types';

describe('Helpers', () => {
  test.each([[1002, Opcode.Mult]])(`${parseOpcode.name}(%i)`, (value, expected) => {
    const opcode = parseOpcode(value);
    expect(opcode).toBe(expected);
  });

  test.each([
    [1002, 3, [ParameterMode.Position, ParameterMode.Immediate, ParameterMode.Position]]
  ])(`${parseParameterModes.name}(%i)`, (value, numParams, expectedModes) => {
    const modes = parseParameterModes(value as number, numParams as number);
    expect(modes).toEqual(expectedModes);
  });

  test.each([
    [
      [1002, 4, 3, 4, 33],
      [33, 3]
    ]
  ])(`${getParameterValues.name}(%p)`, (memory, expected) => {
    const inputs = getParameterValues(memory as number[], 0, 2);
    expect(inputs).toEqual(expected);
  });
});
