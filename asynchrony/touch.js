/*
Реализуйте и экспортируйте асинхронную функцию touch(),которая создаёт файл,
если его не существует. Если файл существует, то функция должна успешно
завершиться.

Пример:
import { touch } from './file.js';
touch('/myfile').then(() => console.log('created!'));

// Повторный вызов успешно завершается
touch('/myfile').then(() => console.log('created!'));
*/

/* eslint-disable import/prefer-default-export */

import fsp from 'fs/promises';

export const touch = (filepath) => fsp
  .access(filepath)
  .catch(() => fsp.writeFile(filepath, ''));
