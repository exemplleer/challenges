/*
Реализуйте и экспортируйте по умолчанию функцию, которая нормализует имена
классов для всех элементов на странице. Изначально названия всех классов
написаны в стиле kebab-case, а при нормализации нужно изменить их названия
на стиль camelCase: text-center => textCenter.

Попробуйте решить эту задачу без использования регулярных выражений.
Самый простой способ найти все элементы в документе — это
document.body.getElementsByTagName('*')

Пример:
// <body>
//   <div class="text-center row-b">Bam</div>
// </body>

normalize(document);
console.log(document.body.innerHTML);

// <body>
//   <div class="textCenter rowB">Bam</div>
// </body>
*/

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import camelCase from 'lodash/camelCase';

const normalize = (document) => {
  const elements = document.body.getElementsByTagName('*');
  const elementsList = [...elements];

  elementsList.forEach((elem) => {
    const { classList } = elem;

    classList.forEach((className) => {
      classList.replace(className, camelCase(className));
    });
  });
};

export default normalize;

/*
export default (document) => {
  const allNodes = [...document.body.getElementsByTagName('*')];
  allNodes.forEach((node) => {
    const process = (item) => node.classList.replace(item, camelCase(item));
    node.classList.forEach(process);
  });
};
*/
