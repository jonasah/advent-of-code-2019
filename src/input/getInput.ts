import fs from 'fs';
import path from 'path';

export function getInput(day: number): string {
  return fs
    .readFileSync(path.join(process.cwd(), 'input', `day${day}.txt`), 'utf-8')
    .trim();
}
