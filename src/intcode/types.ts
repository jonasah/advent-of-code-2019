export const enum Opcode {
  Add = 1,
  Mult = 2,
  Input = 3,
  Output = 4,
  JumpIfTrue = 5,
  JumpIfFalse = 6,
  LessThan = 7,
  Equals = 8,
  Halt = 99
}

export const enum ParameterMode {
  Position = 0,
  Immediate = 1
}

export interface Instruction {
  opcode: Opcode;
  execute: (memory: number[], ip: number) => number;
}

export interface Result {
  output: number;
  outputs: number[];
  memory: number[];
}
