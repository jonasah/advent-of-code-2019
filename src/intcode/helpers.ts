import { ParameterMode } from './types';

export function parseOpcode(value: number) {
  return value % 100;
}

export function parseParameterModes(value: number, numInputs: number): ParameterMode[] {
  const modes: ParameterMode[] = [];
  let modesValue = Math.floor(value / 100);

  while (modesValue > 0) {
    modes.push(modesValue % 10);
    modesValue = Math.floor(modesValue / 10);
  }

  if (modes.length < numInputs) {
    modes.push(...new Array(numInputs - modes.length).fill(ParameterMode.Position));
  }

  return modes;
}

export function getParameterValues(
  memory: readonly number[],
  ip: number,
  numParams: number
): number[] {
  return parseParameterModes(memory[ip], numParams).map((mode, i) => {
    const valueOrAddress = memory[ip + i + 1];
    return mode === ParameterMode.Immediate ? valueOrAddress : memory[valueOrAddress];
  });
}
