/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
массив и число, которое задает размер чанка (куска). Функция должна вернуть
массив, состоящий из чанков указанной размерности.

Примеры:
chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]
*/

const chunk = (arr, size) => {
  const chanked = [];
  let counter = size;

  for (let i = 0; i < arr.length; i += 1) {
    if (counter === size) {
      chanked.push([]);
      counter = 0;
    }
    const lastItem = chanked.length - 1;
    chanked[lastItem].push(arr[i]);
    counter += 1;
  }
  return chanked;
};

export default chunk;

/*

const chunk = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

export default chunk;

*/
