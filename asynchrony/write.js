/* 
Реализуйте асинхронную функцию, которая записывает данные по указанному пути и
оповещает о завершении работы через переданный колбек. Экспортируйте функцию по
умолчанию.

Использование:
import write from './writer.js';
write('./myfile', 'data', () => {
  console.log('success');
});
*/

import fs from 'fs';

const write = (filepath, data, cb) => {
  fs.writeFile(filepath, data, cb);
};

export default write;
