/* eslint-disable @typescript-eslint/no-magic-numbers */

import { Program } from '.';

export const testPrograms = {
  jumpIfTrue: new Program([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1]), // immediate mode
  jumpIfFalse: new Program([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9]), // position mode
  lessThanPosition: new Program([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8]),
  lessThanImmediate: new Program([3, 3, 1107, -1, 8, 3, 4, 3, 99]),
  equalsPosition: new Program([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8]),
  equalsImmediate: new Program([3, 3, 1108, -1, 8, 3, 4, 3, 99]),
  large: new Program([
    3,
    21,
    1008,
    21,
    8,
    20,
    1005,
    20,
    22,
    107,
    8,
    21,
    20,
    1006,
    20,
    31,
    1106,
    0,
    36,
    98,
    0,
    0,
    1002,
    21,
    125,
    20,
    4,
    20,
    1105,
    1,
    46,
    104,
    999,
    1105,
    1,
    46,
    1101,
    1000,
    1,
    20,
    4,
    20,
    1105,
    1,
    46,
    98,
    99
  ])
};
