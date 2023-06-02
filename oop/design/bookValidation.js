/*
Сотрудники библиотеки решили провести ревизию базы данных своих книг, все ли
заполнено правильно. Для этого им понадобится программа, которая находит
список книг с неправильно заполненными данными.

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
список книг, находит среди них невалидные и возвращает их наружу.
Описания формата каждой книги:
- name – строка, обязательное
- author – строка, обязательное
- pagesCount – положительное число, необязательное
- link – строка url, необязательное, не может быть пустой строкой; ссылка на
  книгу в интернете
- genre – строка, необязательное; жанр книги. Должен входить в список
  определенный в файле index.js

Пример:
const books = [
  { name: 'book', author: 'author' },
  { author: 'author 2' },
];
const invalidBooks = getInvalidBooks(books); // [{ author: 'author 2' }]
*/

import yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

const schema = yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  pagesCount: yup.number().positive(),
  link: yup.string().url().min(1),
  genre: yup.string().oneOf(genres),
});

export default (books) => books.filter((book) => !schema.isValidSync(book));
