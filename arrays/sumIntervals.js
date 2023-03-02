/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив интервалов и
возвращает сумму всех длин интервалов. В данной задаче используются только интервалы целых чисел от
-100 до 100 , которые представлены в виде массива. Первое значение интервала всегда будет меньше,
чем второе значение. Например, длина интервала [-100, 0] равна 100, а длина интервала [5, 5] равна
0. Пересекающиеся интервалы должны учитываться только один раз.
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
