import { getParameterValues } from '../helpers';
import { Instruction, Opcode } from '../types';

export abstract class ArithmeticInstruction implements Instruction {
  private readonly numInputParams = 2;
  private readonly resultAddressOffset = 3;
  private readonly instructionSize = 4;

  protected constructor(
    public readonly opcode: Opcode,
    private readonly fn: (...values: number[]) => number
  ) {}

  public execute(memory: number[], ip: number): number {
    const values = getParameterValues(memory, ip, this.numInputParams);
    const result = this.fn(...values);
    const resultAddress = memory[ip + this.resultAddressOffset];
    memory[resultAddress] = result;

    return ip + this.instructionSize;
  }
}

export class AddInstruction extends ArithmeticInstruction {
  constructor() {
    super(Opcode.Add, (val1, val2) => val1 + val2);
  }
}

export class MultInstruction extends ArithmeticInstruction {
  constructor() {
    super(Opcode.Mult, (val1, val2) => val1 * val2);
  }
}
