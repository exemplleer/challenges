/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
document.documentElement, извлекает из него параграфы и возвращает массив из
их содержимого. Не забудьте очистить данные от концевых пробелов и переводов
строк с помощью trim():

<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <p>
      First paragraph
    </p>
    <table border="1">
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
    </table>
  </body>
</html>

Пример:
import extractData from './extractor.js';

const data = extractData(document.documentElement);
console.log(data);
// [
//   'First paragraph'
// ]
*/

const normalizeContent = (content) => content.split('').filter((char) => char !== '\n').join('').trim();

export default (htmlTree) => {
  const body = htmlTree.lastChild;
  const list = Array.from(body.childNodes);

  return list
    .filter((node) => node.tagName === 'P')
    .map((node) => normalizeContent(node.textContent));
};
