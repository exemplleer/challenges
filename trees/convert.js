/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив определённой
структуры и возвращает объект, полученный из этого массива.
Массив устроен таким образом, что с помощью него можно представлять ассоциативные массивы. Каждое
значение внутри него — это массив из двух элементов, где первый элемент — ключ, а второй —
значение. В свою очередь, если значение тоже является массивом, то считается, что это вложенное
представление ассоциативного массива. Другими словами, любой массив внутри исходного массива всегда
рассматривается как данные, которые нужно конвертировать в объект.
*/

const convert = (arr) =>
  arr.reduce((acc, elem) => {
    const [key, value] = elem;
    if (Array.isArray(value)) {
      return { ...acc, [key]: convert(value) };
    }
    return { ...acc, [key]: value };
  }, {});

export default convert;

/*

const convert = (tree) => tree.reduce((acc, node) => {
  const [key, value] = node;
  const newValue = Array.isArray(value) ? convert(value) : value;
  return { ...acc, [key]: newValue };
}, {});

export default convert;

*/
