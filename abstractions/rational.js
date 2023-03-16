/*
Реализуйте абстракцию для работы с рациональными числами, используя пары.
Экспортируйте созданные функции.
Обратите внимание, что результатом любой арифметической операции над
рациональным числом будет рациональное число.

Примеры:
const rat1 = make(2, 3);
const rat12 = make(4, 6);
const rat2 = make(7, 2);

toString(rat12); // '4 / 6'
isEqual(rat1, rat12); // true

add(rat1, rat2); // 25/6
sub(rat2, rat1); // 17/6
mul(rat1, rat2); // 14/6
div(rat1, rat2); // 4/21
*/

import { cons, car, cdr } from './pairs.js';

export const make = (a, b) => cons(a, b);
export const numer = (rat) => car(rat);
export const denom = (rat) => cdr(rat);

export const toString = (rat) => `${numer(rat)} / ${denom(rat)}`;

const binaryOperation = (operationName) => (rat1) => (rat2) => {
  const a = numer(rat1);
  const b = denom(rat1);
  const c = numer(rat2);
  const d = denom(rat2);

  switch (operationName) {
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

export const add = (r1, r2) => binaryOperation('add')(r1)(r2);
export const sub = (r1, r2) => binaryOperation('sub')(r1)(r2);
export const mul = (r1, r2) => binaryOperation('mul')(r1)(r2);
export const div = (r1, r2) => binaryOperation('div')(r1)(r2);
export const isEqual = (r1, r2) => binaryOperation('equal')(r1)(r2);
