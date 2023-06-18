/*
Нужно извлечь данные с фиксированной структурой. Мы будем парсить страницу
категории статей. Эта страница содержит заголовок категории, его описание и
ссылки на статьи с небольшим описанием. Эта структура не меняется, меняется
только количество статей от категории к категории.

Реализуйте логику функции, которая принимает на вход document, извлекает из
него данные и возвращает объект нужной структуры:

<div class="content">
  <h1>Category Name</h1>
  <div class="description">Category Description</div>
  <div class="links">
    <div>
      <h2><a href="#">Article Name 1</a></h2>
      <p>Article Description 1</p>
    </div>
    <div>
      <h2><a href="#">Article Name 2</a></h2>
      <p>Article Description 2</p>
    </div>
  </div>
</div>

Пример:
import extractData from './extractor1.js';

const data = extractData(document);
console.log(data);
// {
//   title: 'Category Name',
//   description: 'Category Description',
//   items: [
//     { title: 'Article Name 1', description: 'Article Description 1' },
//     { title: 'Article Name 2', description: 'Article Description 2' }
//   ]
// }
*/

export default (document) => {
  const title = document.querySelector('h1').textContent;
  const description = document.querySelector('.description').textContent;
  const articles = document.querySelectorAll('.links div');

  const items = Array.from(articles).map((item) => ({
    title: item.querySelector('h2 a').textContent,
    description: item.querySelector('p').textContent,
  }));

  return { title, description, items };
};

/*
export default (document) => {
  const root = document.querySelector('.content');

  const categoryTitleElement = root.querySelector('h1');
  const categoryTitle = categoryTitleElement.innerHTML;
  const categoryDescriptionElement = root.querySelector('.description');
  const categoryDescription = categoryDescriptionElement.innerHTML;

  const itemElements = root.querySelectorAll('.links div');
  const items = Array.from(itemElements).map((element) => {
    const titleElement = element.querySelector('a');
    const descriptionElement = element.querySelector('p');

    return {
      title: titleElement.innerHTML,
      description: descriptionElement.innerHTML,
    };
  });

  return {
    title: categoryTitle,
    description: categoryDescription,
    items,
  };
};
*/
