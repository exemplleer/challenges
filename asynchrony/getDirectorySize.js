/*
Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая
считает размер переданной директории не включая поддиректории. Анализ размера
файла должен происходить параллельно, для этого воспользуйтесь библиотекой
async. Колбек должен вызываться и в случае ошибки

- fs.readdir() чтение содержимого директории, возвращает файлы и папки в
  директории
- path.join() конструирует пути
- async.map()
- fs.stat() информация о файле. В получаемом объекте содержится метод
  isFile() для проверки является ли элемент файлом
- _.sumBy() нахождение суммы в массиве

Пример:
getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});
*/

/* eslint-disable import/prefer-default-export */

import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

const getDirectorySize = (dirpath, callback) => {
  fs.readdir(dirpath, (error1, filenames) => {
    if (error1) {
      callback(error1);
      return;
    }

    // files and dirs
    const filepaths = filenames.map((name) => path.join(dirpath, name));

    async.map(filepaths, fs.stat, (error2, stats) => {
      if (error2) {
        callback(error2);
        return;
      }

      // only files
      const files = stats.filter((stat) => stat.isFile());
      const sum = _.sumBy(files, 'size');

      callback(null, sum);
    });
  });
};

export { getDirectorySize };

/*
Теперь то же самое нужно сделать с помощью промисов.

Пример:
getDirectorySizePromise('/usr/local/bin').then(console.log);
*/

// eslint-disable-next-line import/first
import fsp from 'fs/promises';

const getAbsolutePath = (dirpath, filename) => path.join(dirpath, filename);

const getDirectorySizePromise = (dirpath) => {
  const promise = fsp.readdir(dirpath).then((names) => {
    const paths = names.map((name) => getAbsolutePath(dirpath, name));
    const promises = paths.map((filepath) => fsp.stat(filepath));

    return Promise.all(promises);
  });

  return promise.then((stats) => _.sumBy(
    stats.filter((stat) => stat.isFile()),
    'size',
  ));
};

export { getDirectorySizePromise };
