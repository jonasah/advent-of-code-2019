import { Instruction, Opcode } from '../types';
import { getParameterValues } from '../helpers';

export class InputInstruction implements Instruction {
  public readonly opcode = Opcode.Input;

  private readonly resultAddressOffset = 1;
  private readonly instructionSize = 2;

  constructor(private readonly inputProvider: () => number) {}

  public execute(memory: number[], ip: number): number {
    const resultAddress = memory[ip + this.resultAddressOffset];
    memory[resultAddress] = this.inputProvider();
    return ip + this.instructionSize;
  }
}

export class OutputInstruction implements Instruction {
  public readonly opcode = Opcode.Output;

  private readonly numInputParams = 1;
  private readonly instructionSize = 2;

  constructor(private readonly outputReporter: (value: number) => void) {}

  public execute(memory: number[], ip: number): number {
    const [value] = getParameterValues(memory, ip, this.numInputParams);
    this.outputReporter(value);
    return ip + this.instructionSize;
  }
}
