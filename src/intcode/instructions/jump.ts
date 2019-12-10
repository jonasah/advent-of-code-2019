import { Instruction, Opcode } from '../types';
import { getParameterValues } from '../helpers';

export abstract class JumpInstruction implements Instruction {
  private readonly numInputParams = 2;
  private readonly instructionSize = 3;

  protected constructor(
    public readonly opcode: Opcode,
    private readonly compareFunction: (value: number) => boolean
  ) {}

  public execute(memory: number[], ip: number): number {
    const [value, jumpAddress] = getParameterValues(memory, ip, this.numInputParams);

    if (this.compareFunction(value)) {
      return jumpAddress;
    }

    return ip + this.instructionSize;
  }
}

export class JumpIfTrueInstruction extends JumpInstruction {
  constructor() {
    super(Opcode.JumpIfTrue, val => val !== 0);
  }
}

export class JumpIfFalseInstruction extends JumpInstruction {
  constructor() {
    super(Opcode.JumpIfFalse, val => val === 0);
  }
}
