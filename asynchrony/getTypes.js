/*
Реализуйте и экспортируйте асинхронную функцию getTypes(), которая анализирует
список переданных путей и возвращает массив (в промисе), с описанием того, что
находится по каждому из путей в виде строк 'directory' и 'file'.

Эта функция должна отрабатывать успешно в любом случае. Если во время
выполнения асинхронной операции возникла ошибка, то значением для этого пути
будет null. Для простоты считаем, что в эту функцию всегда передается как
минимум один путь для обработки (иначе придется задействовать механизм, который
проходится в курсах далее).

- fsPromises.stat информация о файле или директории. Для проверки на директорию
  используйте метод isDirectory.
- Методы then и catch не меняют сам промис, а возвращают новый

Пример:
import { getTypes } from './file.js';

getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]
*/

/* eslint-disable import/prefer-default-export */

import fsp from 'fs/promises';

const getStats = (path) => fsp.stat(path);

const fileOrDirectory = (path) => getStats(path)
  .then((data) => (data.isDirectory() ? 'directory' : 'file'))
  .catch(() => null);

const getTypes = (paths) => {
  const init = Promise.resolve([]);

  const promise = paths.reduce((acc, path) => {
    const type = fileOrDirectory(path);
    const newAcc = acc.then((types) => type.then((data) => types.concat(data)));
    return newAcc;
  }, init);

  return promise;
};

export { getTypes };

/*
import fsp from 'fs/promises';

const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (filesPath) => {
  // функция получает путь и аккумулятор из reduce, выполняет попытку получить
  // stat, добавляет в аккумулятор строку или null и возвращает обновлённый
  // аккумулятор
  const processPath = (filepath, result) =>
    fsp
      .stat(filepath)
      .then((data) => [...result, getTypeName(data)])
      .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    // promise - это аккумулятор, обёрнутый в промис, поэтому на нём вызывается
    // then. result - предыдущее значение аккумулятора
    (promise, filepath) =>
      promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  );
  return resultPromise;
};
*/
