/* eslint-disable import/extensions */
import { cons, car, cdr } from './pairs.js';

export const make = (a, b) => cons(a, b);
export const numer = (rat) => car(rat);
export const denom = (rat) => cdr(rat);

export const toString = (rat) => `${numer(rat)} / ${denom(rat)}`;

const doIt = (operation) => (rat1, rat2) => {
  const a = numer(rat1);
  const b = denom(rat1);
  const c = numer(rat2);
  const d = denom(rat2);

  switch (operation) {
    case 'add':
      return make(a * d + b * c, b * d);
    case 'sub':
      return make(a * d - b * c, b * d);
    case 'mul':
      return make(a * c, b * d);
    case 'div':
      return make(a * d, b * c);
    case 'equal':
      return a / b === c / d;
    default:
      return null;
  }
};

export const add = (r1, r2) => doIt('add')(r1, r2);
export const sub = (r1, r2) => doIt('sub')(r1, r2);
export const mul = (r1, r2) => doIt('mul')(r1, r2);
export const div = (r1, r2) => doIt('div')(r1, r2);
export const isEqual = (r1, r2) => doIt('equal')(r1, r2);
