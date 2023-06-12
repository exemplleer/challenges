/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
ссылку на страницу какого-то сайта, загружает содержимое этой страницы,
извлекает из него ссылки и проверяет их доступность. Функция должна вернуть
список битых ссылок.

import getBadLinks from '../checker.js';

const url = 'https://privet.hexlet';
const links = await getBadLinks(url);
console.log(links);

// Гипотетический пример:
// [
//   'https://privet.hexlet/somepage',
//   'https://privet.hexlet/another/page',
// ]

Проверка доступности:
Любые ссылки возвращающие коды ответа кроме 2xx (любые двухсотые) считаются
битыми. Axios по умолчанию считает ошибочными все коды кроме 2xx и отправляет
их в блок catch(). То есть если запрос axios.get() отработал без ошибок, то
страница отдает 2xx код ответа, если завершился с ошибкой, то ответа либо нет,
либо это не 2xx код. Такие ссылки считаются битыми.

Для извлечения ссылок со страницы воспользуйтесь функцией extractLinks(content)
*/

import { URL } from 'url';
import axios from 'axios';

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/gi;
  const results = content.matchAll(linkRx);
  return Array.from(results)
    .map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

const checker = async (url) => {
  const response = await axios.get(url);
  const content = response.data;
  const links = extractLinks(content);

  const badLinksPromises = links.map(async (link) => {
    try {
      await axios.get(link);
      return null;
    } catch (error) {
      return link;
    }
  });

  const badLinks = Promise.all(badLinksPromises);

  const badLinksWithoutNull = (await badLinks).filter((link) => link);

  return badLinksWithoutNull;
};

export default checker;

/*
export default async (initialLink) => {
  // запрашиваем страницу по ссылке
  const response = await axios.get(initialLink);
  // извлекаем массив всех ссылок на странице
  const links = extractLinks(response.data);
  // функция, возвращающая ссылку, если запрос по ней оказался неудачным
  // при удачном запросе она возвращает null
  const request = (link) => axios.get(link).then(() => null).catch(() => link);
  // Отправляем запросы ко всем ссылкам
  const promises = links.map(request);
  // Получаем массив, состоящий из битых ссылок и значений null
  const results = await Promise.all(promises);
  // отсеиваем null
  return results.filter((result) => result !== null);
};
*/
