/*
Реализуйте таймер в виде промиса. Функция должна принимать на вход количество
миллисекунд и возвращать промис. Экспортируйте функцию по умолчанию.

Пример:
import wait from './timer.js';
wait(100).then(() => console.log('time is over!'));
*/

/* eslint-disable no-promise-executor-return */

const timer = (waitTimeMs) => {
  const promise = new Promise((resolve) => setTimeout(resolve, waitTimeMs));
  return promise;
};

export default timer;
