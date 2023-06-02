/*
В Unix существует такая утилита как awk, она позволяет проводить различные
манипуляции с входным потоком (текстом) и получать на выходе новый текст.
Например иногда, бывает нужно взять вывод одной программы и оставить от него
только первый столбец.

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
текст и возвращает массив состоящий из первых слов каждой строки текста.
Пустые строчки должны игнорироваться.
- Строки разделяются переводом строки
- В любом месте строки может быть сколько угодно пробелов
- Текст должен перебираться посимвольно (мы пишем лексер)

Пример:
const text = '  what who   \nhellomy\n hello who are you\n';
const result = solution(text);
// [
//   'what',
//   'hellomy',
//   'hello',
// ];

Решение должно быть автоматным
*/

export default (str) => {
  const result = [];
  // ignored, write, pushed
  let state = 'ignored';
  let word = '';

  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];

    switch (state) {
      case 'ignored':
        if (symbol !== ' ' && symbol !== '\n') {
          word += symbol;
          state = 'write';
        }
        break;

      case 'write':
        if (symbol === ' ') {
          result.push(word);
          word = '';
          state = 'pushed';
        } else if (symbol === '\n') {
          result.push(word);
          word = '';
          state = 'ignored';
        } else {
          word += symbol;
        }
        break;

      case 'pushed':
        if (symbol === '\n') {
          state = 'ignored';
        }
        break;

      default:
        throw new Error(`Unexpected state: '${state}'`);
    }
  }

  if (word.length > 0) {
    result.push(word);
  }

  return result;
};
