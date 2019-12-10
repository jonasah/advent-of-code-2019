import { parseOpcode } from './helpers';
import { AddInstruction, MultInstruction } from './instructions/arithmetic';
import { EqualsInstruction, LessThanInstruction } from './instructions/comparison';
import { InputInstruction, OutputInstruction } from './instructions/input-output';
import { JumpIfFalseInstruction, JumpIfTrueInstruction } from './instructions/jump';
import { Instruction, Opcode, Result } from './types';

const nounInputAddress = 1;
const verbInputAddress = 2;

export class Program {
  private readonly instructionMap: Map<Opcode, Instruction>;

  private input = NaN;
  private outputs: number[] = [];

  constructor(private readonly code: number[]) {
    const instructions = [
      new AddInstruction(),
      new MultInstruction(),
      new InputInstruction(() => this.input),
      new OutputInstruction(value => this.outputs.push(value)),
      new JumpIfTrueInstruction(),
      new JumpIfFalseInstruction(),
      new LessThanInstruction(),
      new EqualsInstruction()
    ];

    this.instructionMap = new Map(instructions.map(inst => [inst.opcode, inst]));
  }

  public run(input?: number | { noun: number; verb: number }): Result {
    const memory = [...this.code];

    this.input = NaN;
    this.outputs = [];

    if (typeof input === 'number') {
      // day 5
      this.input = input;
    } else if (input != null) {
      // day 2
      memory[nounInputAddress] = input.noun;
      memory[verbInputAddress] = input.verb;
    }

    let ip = 0;

    while (memory[ip] !== Opcode.Halt) {
      const opcode = parseOpcode(memory[ip]);
      const instruction = this.instructionMap.get(opcode);

      if (instruction == null) {
        throw new Error(`Invalid opcode: ${opcode}`);
      }

      ip = instruction.execute(memory, ip);
    }

    return {
      output: memory.first(), // day 2
      outputs: this.outputs, // day 5
      memory
    };
  }
}
