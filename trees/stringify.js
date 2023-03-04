/*
Реализуйте и экспортируйте по умолчанию функцию, похожую на JSON.stringify(), но со следующими
отличиями: ключи и строковые значения должны быть без кавычек; строчка (линия) в строке
заканчивается самим значением, без запятой.
Не используйте в своём решении саму функцию JSON.stringify().

Синтаксис:
stringify(value[, replacer[, spacesCount]])

Параметры:
  value
    Значение, преобразуемое в строку.
  replacer, необязательный
    Строка - отступ для ключа; Значение по умолчанию - один пробел.
  spacesCount, необязательный
    Число - количество повторов отступа ключа. Значение по умолчанию - 1.
*/

const stringify = (data, replacer = ' ', spacesCount = 1) => {
  const iter = (elem, depth = 1) => {
    // check element is array
    if (Array.isArray(elem)) {
      const structure = elem.reduce((acc, inner) => {
        const props = iter(inner, depth + 1);
        const spacing = replacer.repeat(spacesCount).repeat(depth);
        acc.push(`${spacing}${props}`);
        return acc;
      }, []);

      const spacing = replacer.repeat(spacesCount).repeat(depth - 1);
      return `[\n${structure.join('\n')}\n${spacing}]`;
    }

    // check element is object
    if (typeof elem === 'object' && elem !== null) {
      const structure = Object.entries(elem).reduce((acc, [key, value]) => {
        const props = [key, iter(value, depth + 1)].join(': ');
        const spacing = replacer.repeat(spacesCount).repeat(depth);
        acc.push(`${spacing}${props}`);
        return acc;
      }, []);

      const spacing = replacer.repeat(spacesCount).repeat(depth - 1);
      return `{\n${structure.join('\n')}\n${spacing}}`;
    }

    // otherwise element a primitive data type
    return String(elem);
  };

  return iter(data);
};

export default stringify;

/*

import _ from 'lodash';

const stringify = (value, replacer = ' ', spacesCount = 1) => {
  const iter = (currentValue, depth) => {
    // альтернативный вариант: (typeof currentValue !== 'object' || currentValue === null)
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, 1);
};

export default stringify;

*/
