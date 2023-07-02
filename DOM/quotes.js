/*
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
  </head>
  <body>
    <div class="container m-3">
      <h1 class="mb-5">Цитаты Тото Роббинса</h1>
      <div class="text-center">
        <blockquote id="result" class="blockquote">
          Нужно писать код как нужно, а как не нужно писать код не нужно
        </blockquote>
        <button type="button" class="btn btn-primary mb-3 btn-lg">Жмяк</button>
      </div>
    </div>
    <script type="module" src="./src/index.js" ></script>
  </body>
</html>
*/

/*
Реализуйте логику показа цитат Тото Роббинса.
Каждое нажатие на кнопку в веб-доступе должно загружать новую цитату с бэкенда
и отображать вместо старой. Вся необходимая верстка уже добавлена, ее можно
увидеть и изучить в веб-доступе. Запрос на сервер осуществляется с помощью
axios.
*/

import axios from 'axios';

const routes = {
  randomQuotePath: () => '/api/quotes/random',
};

export default () => {
  const result = document.querySelector('#result');
  const button = document.querySelector('.btn');

  button.addEventListener('click', async () => {
    const quote = await axios
      .get(routes.randomQuotePath())
      .then((response) => response.data.quote);

    result.textContent = quote;
  });
};
