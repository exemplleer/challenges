/*
Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.
Для решения задачи нельзя использовать готовые методы для выравнивания массивов.
*/

const flatten = (arr) => [].concat(...arr.map((el) => (Array.isArray(el) ? flatten(el) : el)));

export default flatten;

/*

const flatten = (list) => list.reduce((acc, element) => {
  const result = (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);
  return result;
}, []);

export default flatten;

*/
