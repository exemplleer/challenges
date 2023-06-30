/* eslint-disable max-len */

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <form class="form-inline">
            <div class="form-group">
              <label>Capital</label>
              <input class="ml-2 form-control" type="text" data-autocomplete-name="capital" data-autocomplete="/capitals.json">
            </div>
          </form>
        </div>
        <div class="col-6">
          <ul data-autocomplete-name="capital">
            <li>Nothing</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="form-inline">
            <div class="form-group">
              <label>Country</label>
              <input class="ml-2 form-control" type="text" data-autocomplete-name="country" data-autocomplete="/countries.json">
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul data-autocomplete-name="country">
            <li>Nothing</li>
          </ul>
        </div>
      </div>
    </div>
    <script type="module" src="./src/index.js" ></script>
  </body>
</html>
*/

/*
На странице присутствуют элементы input с атрибутами data-autocomplete и
data-autocomplete-name, к которым нужно привязаться. Атрибут data-autocomplete
содержит ссылку, по которой нужно делать запрос на данные. Атрибут
data-autocomplete-name содержит имя, по которому необходимо найти на странице
список ul с точно таким же атрибутом и значением. В этом списке выводятся
данные.

Реализуйте автозаполнение.
При изменении строки в поле ввода (ввод символов или их удаление), необходимо
выполнить запрос на сервер с query-параметром search, значением которого будет
строка введенная в input. Сервер возвращает массив из стран на английском
языке.

- Ваш код должен работать, даже если на странице множество автозаполнений
- Для формирования правильного запроса на сервер, используйте URL
- Используйте событие input
- Используйте async/await
- Значение поля input необходимо брать из события так: e.target.value
- Текущий хост можно извлечь так window.location.origin

Если этот массив не пустой, то нужно заполнить список. Посмотреть его
нахождение можно двумя способами — использовать public/index.html или открыть
исходный код страницы в веб-доступе таким образом:

<ul data-autocomplete-name="country">
  <li>pakistan</li>
  <li>panama</li>
  <li>paraguay</li>
</ul>

Если с сервера пришел пустой список, то нужно вывести:

<ul data-autocomplete-name="country">
  <li>Nothing</li>
</ul>
*/

export default () => {
  const autocompleteInputs = document.querySelectorAll('input[data-autocomplete]');
  autocompleteInputs.forEach((input) => {
    const { autocomplete: route, autocompleteName } = input.dataset;

    input.addEventListener('input', async (e) => {
      const ul = document.querySelector(`ul[data-autocomplete-name="${autocompleteName}"]`);

      const url = new URL(route, window.location.origin);
      url.searchParams.append('search', e.target.value);

      const items = await fetch(url).then((data) => data.json());

      if (items.length > 0) {
        const newInner = items.map((item) => `<li>${item}</li>`).join('');
        ul.innerHTML = newInner;
      } else {
        ul.innerHTML = '<li>Nothing</li>';
      }
    });
  });
};
