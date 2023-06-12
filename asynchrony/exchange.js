/*
Реализуйте и экспортируйте асинхронную функцию exchange(), которая обменивает
содержимое двух файлов.

Пример:
import { exchange } from './file.js';
exchange('/myfile1', '/myfile2');
*/

/* eslint-disable import/prefer-default-export */

import fsp from 'fs/promises';

const exchange = async (filepath1, filepath2) => {
  const promiseRead1 = fsp.readFile(filepath1, 'utf-8');
  const promiseRead2 = fsp.readFile(filepath2, 'utf-8');

  const [data1, data2] = await Promise.all([promiseRead1, promiseRead2]);

  const promiseWrite1 = fsp.writeFile(filepath1, data2);
  const promiseWrite2 = fsp.writeFile(filepath2, data1);

  await Promise.all([promiseWrite1, promiseWrite2]);
};

export { exchange };
