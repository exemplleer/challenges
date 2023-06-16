/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход путь
(абсолютный или относительный) и возвращает информацию о файлах и директориях,
расположенных по этому пути. Данные возвращаются в виде массива объектов, где
каждый элемент — это информация о конкретном файле: его путь и описание
доступов (stat.mode). Объекты в массиве должны быть отсортированы по имени
файла в обратном порядке.

Эта функция должна уметь обрабатывать не только директории, но и файлы. В таком
случае отдается массив с одним объектом — информацией по текущему файлу.

+ readdir() — чтение директории
+ stat() — информация о файле. isFile() — является ли файлом, mode - описание
  доступа.
+ zipWith() — вспомогательная функция из lodash.

Примеры:
import ls from '../ls.js';

await ls('/var');
// [
//   { filepath: '/var/log', mode: 16877 },
//   { filepath: '/var/lock', mode: 17407 },
//   { filepath: '/var/local', mode: 17917 },
// ];

await ls('/etc/passwd');
// [{ filepath: '/etc/passwd', mode: 33188 }];

await ls('../../../../etc/passwd');
// [{ filepath: '/etc/passwd', mode: 33188 }];
*/

import path from 'path';
import fsp from 'fs/promises';

const getFileStats = async (filepath) => fsp.stat(filepath);

const getDirFileNames = async (dirpath) => fsp.readdir(dirpath);

const isFile = async (filepath) => (await getFileStats(filepath)).isFile();

const getFileMode = async (filepath) => (await getFileStats(filepath)).mode;

export default async (inputPath) => {
  const absoluteInputPath = path.resolve(inputPath);

  if (await isFile(absoluteInputPath)) {
    const filepath = absoluteInputPath;
    const mode = await getFileMode(filepath);
    return [{ filepath, mode }];
  }

  // files and dirs
  const filenames = await getDirFileNames(absoluteInputPath);

  const promisesStats = filenames
    .sort((a, b) => (a > b ? -1 : 1))
    .map(async (file) => {
      const filepath = path.join(absoluteInputPath, file);
      const mode = await getFileMode(filepath);

      return { filepath, mode };
    });

  return Promise.all(promisesStats);
};

/*
import _ from 'lodash';

export default async (pathForInspect) => {
  const absolutePath = path.resolve(pathForInspect);
  const stat = await fsp.stat(absolutePath);
  if (stat.isFile()) { // guard expression
    return [{ filepath: absolutePath, mode: stat.mode }];
  }

  const filenames = await fsp.readdir(absolutePath);
  const filepaths = filenames.sort((a, b) => (a > b ? -1 : 1))
    .map((filename) => path.join(absolutePath, filename));
  const stats = await Promise.all(filepaths.map((filePath) => fsp.stat(filePath)));

  return _.zipWith(filepaths, stats, (filepath, { mode }) => ({ filepath, mode }));
};
*/
