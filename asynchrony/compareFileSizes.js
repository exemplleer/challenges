/*
Реализуйте и экспортируйте асинхронную функцию compareFileSizes(), которая
сравнивает размеры двух файлов и передает результат сравнения в переданную
callback-функцию. Если первый файл больше второго, то она передает единицу,
если размеры равны, то ноль, иначе — -1.

Для реализации этого задания, нужно воспользоваться функцией fs.stat

Пример:
compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result));
*/

/* eslint-disable import/prefer-default-export */

import fs from 'fs';

const compareSize = (size1, size2) => {
  if (size1 === size2) {
    return 0;
  }

  return size1 > size2 ? 1 : -1;
};

const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_err1, data1) => {
    fs.stat(filepath2, (_err2, data2) => {
      const size1 = data1.size;
      const size2 = data2.size;

      const data = compareSize(size1, size2);

      cb(null, data);
    });
  });
};

export { compareFileSizes };

/*
import fs from 'fs';

export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, { size: size1 }) => {
    fs.stat(filepath2, (_error2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    });
  });
};
*/
