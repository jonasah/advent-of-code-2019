import yargs from 'yargs';
import { day1 } from './day1';
import { day2 } from './day2';
import { day3 } from './day3';

const funcMap = new Map([
  [1, day1],
  [2, day2],
  [3, day3]
]);

const argv = yargs.version(false).command('$0 <day...>', '', yargs => {
  yargs.positional('day', {
    type: 'number',
    choices: Array.from(funcMap.keys())
  });
}).argv;

const days = argv.day as number[];

days.forEach(day => funcMap.get(day)!());
