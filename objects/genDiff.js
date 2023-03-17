/*
Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два
объекта и возвращает результат сравнения в виде объекта. Ключами
результирующего объекта будут все ключи из двух входящих объектов, а значением
строка с описанием отличий: added, deleted, changed или unchanged.
Возможные значения:
  - added — ключ отсутствовал в первом объекте, но был добавлен во второй
  - deleted — ключ был в первом объекте, но отсутствует во втором
  - changed — ключ присутствовал и в первом и во втором объектах, но значения
    отличаются
  - unchanged — ключ присутствовал и в первом и во втором объектах с
    одинаковыми значениями
*/

import _ from 'lodash';

const genDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);

  return keys.reduce((acc, key) => {
    if (!_.has(obj1, key)) {
      acc[key] = 'added';
    } else if (!_.has(obj2, key)) {
      acc[key] = 'deleted';
    } else if (obj1[key] !== obj2[key]) {
      acc[key] = 'changed';
    } else {
      acc[key] = 'unchanged';
    }
    return acc;
  }, {});
};

export default genDiff;
