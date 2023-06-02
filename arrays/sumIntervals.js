/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
массив интервалов и возвращает сумму всех длин интервалов. В данной задаче
используются только интервалы целых чисел от -100 до 100 , которые представлены
в виде массива. Первое значение интервала всегда будет меньше, чем второе
значение. Например, длина интервала [-100, 0] равна 100, а длина интервала
[5, 5] равна 0. Пересекающиеся интервалы должны учитываться только один раз.

Примеры:
sumIntervals([[5, 5]]); // 0
sumIntervals([[-100, 0]]); // 100
sumIntervals([[1, 2], [11, 12]]); // 2
sumIntervals([[2, 7], [6, 6]]); // 5
sumIntervals([[1, 9], [7, 12], [3, 4]]); // 11
sumIntervals([[1, 5], [-30, 19], [1, 7], [16, 19], [5, 100]]); // 130
*/

const sumIntervals = (intervales) => {
  const intervalesChars = [];
  for (let i = 0; i < intervales.length; i += 1) {
    const [start, end] = intervales[i];
    for (let j = start; j < end; j += 1) {
      if (!intervalesChars.includes(j)) {
        intervalesChars.push(j);
      }
    }
  }
  return intervalesChars.length;
};

export default sumIntervals;
