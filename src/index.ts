import { day1_1 } from './day1/day1-1';
import { day1_2 } from './day1/day1-2';

const funcs = [day1_1, day1_2];

funcs
  .reduce((prev, current) => prev.then(current), Promise.resolve())
  .then(() => process.exit());
