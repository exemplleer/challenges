/*
Реализуйте и экспортируйте асинхронную функцию reverse(), которая изменяет
порядок расположения строк в файле на обратный. Функция должна перезаписать
файл.

# file.txt
one
two

Пример:
import { reverse } from './file.js'
reverse('file.txt');

# file.txt
two
one
*/

/* eslint-disable import/prefer-default-export */

import fsp from 'fs/promises';

const reverse = (filepath) => fsp
  .readFile(filepath, 'utf-8')
  .then((data1) => data1.split('\n').reverse().join('\n'))
  .then((data2) => fsp.writeFile(filepath, data2, 'utf-8'));

export { reverse };
