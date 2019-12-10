import { Instruction, Opcode } from '../types';
import { getParameterValues } from '../helpers';

export abstract class ComparisonInstruction implements Instruction {
  private readonly numInputParams = 2;
  private readonly resultAddressOffset = 3;
  private readonly instructionSize = 4;

  protected constructor(
    public readonly opcode: Opcode,
    private readonly compareFunction: (val1: number, val2: number) => boolean
  ) {}

  public execute(memory: number[], ip: number): number {
    const [value1, value2] = getParameterValues(memory, ip, this.numInputParams);
    const result = this.compareFunction(value1, value2);
    const resultAddress = memory[ip + this.resultAddressOffset];
    memory[resultAddress] = result ? 1 : 0;

    return ip + this.instructionSize;
  }
}

export class LessThanInstruction extends ComparisonInstruction {
  constructor() {
    super(Opcode.LessThan, (val1, val2) => val1 < val2);
  }
}

export class EqualsInstruction extends ComparisonInstruction {
  constructor() {
    super(Opcode.Equals, (val1, val2) => val1 === val2);
  }
}
