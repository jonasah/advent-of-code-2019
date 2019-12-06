import { getInput } from '../common/getInput';

export function getInputProgram(): number[] {
  return getInput(2)
    .split(',')
    .map(opcode => parseInt(opcode));
}

const enum Opcodes {
  Add = 1,
  Mult = 2,
  Halt = 99
}

const operations = new Map([
  [Opcodes.Add, (arg0: number, arg1: number) => arg0 + arg1],
  [Opcodes.Mult, (arg0: number, arg1: number) => arg0 * arg1]
]);

export function executeProgram(program: number[]): number[] {
  const memory = [...program];
  let ip = 0;

  while (memory[ip] !== Opcodes.Halt) {
    const opcode = memory[ip];

    const input1Addr = memory[ip + 1];
    const input2Addr = memory[ip + 2];
    const outputAddr = memory[ip + 3];

    const input1 = memory[input1Addr];
    const input2 = memory[input2Addr];

    memory[outputAddr] = operations.get(opcode)!(input1, input2);

    ip += 4;
  }

  return memory;
}

export function runProgram(program: number[], noun: number, verb: number): number {
  const p = [...program];
  p[1] = noun;
  p[2] = verb;
  return executeProgram(p)[0];
}
