/*
В библиотеке async есть функция waterfall(), которая позволяет строить цепочки
асинхронных функций без необходимости вкладывать их друг в друга. Подробнее о
том как она работает, посмотрите в документации. Попробуйте решить данное
упражнение с применением этой функции.

Реализуйте и экспортируйте асинхронную функцию unionFiles(), которую мы
рассматривали в предыдущих уроках. Вот её обычное решение на колбеках:

import fs from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null); // не забываем последний успешный вызов
      });
    });
  });
};
*/

/* eslint-disable import/prefer-default-export */

import fs from 'fs';
import async from 'async';

const unionFiles = (filepath1, filepath2, outputPath, callback) => {
  const readFile1 = (cb) => fs.readFile(filepath1, 'utf-8', (err, data) => cb(err, data));
  const readFile2 = (data1, cb) => fs.readFile(filepath2, 'utf-8', (err, data2) => cb(err, data1, data2));
  const writeFile = (data1, data2, cb) => fs.writeFile(outputPath, `${data1}${data2}`, (err, data) => cb(err, data));

  async.waterfall([readFile1, readFile2, writeFile], callback);
};

export { unionFiles };

/*
const { waterfall } = async;

export const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  waterfall([
    (callback) => fs.readFile(inputPath1, callback),
    (data1, callback) => fs.readFile(inputPath2, (err, data2) => callback(err, data1, data2)),
    (data1, data2, callback) => fs.writeFile(outputPath, `${data1}${data2}`, callback),
  ], cb);
};
*/
