/*
Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину
последнего слова переданной на вход строки. Словом считается любая
последовательность, не содержащая пробелов.

Примеры:
getLastWordLength(''); // 0
getLastWordLength('man in BlacK'); // 5
getLastWordLength('hello, world!  '); // 6
*/

const getLastWordLength = (sentence) => {
  const getLastItem = (arr) => arr.at(-1);

  const words = sentence.trim().split(' ');
  const lastWordLength = getLastItem(words).length;
  return lastWordLength;
};

export default getLastWordLength;

/*
export default (str) => {
  const words = str.trim().split(' ');
  const lastWord = words.at(-1);
  return lastWord.length;
};
*/
