/* eslint-disable @typescript-eslint/no-magic-numbers */

import './extensions';

import yargs from 'yargs';
import { day1 } from './day1';
import { day2 } from './day2';
import { day3 } from './day3';
import { day4 } from './day4';
import { day5 } from './day5';
import { day6 } from './day6';
import { day7 } from './day7';

const funcMap = new Map([
  [1, day1],
  [2, day2],
  [3, day3],
  [4, day4],
  [5, day5],
  [6, day6],
  [7, day7]
]);

const argv = yargs.version(false).command('$0 <day...>', '', yargs => {
  yargs.positional('day', {
    type: 'number',
    choices: Array.from(funcMap.keys())
  });
}).argv;

const days = (argv.day as number[]).sort((a, b) => (a < b ? -1 : 1));

days
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  .map(day => funcMap.get(day)!())
  .forEach(results => {
    results.forEach(result => {
      console.log(`(${result.day}-${result.part}) ${result.message}: ${result.answer}`);
    });
  });
