/* eslint-disable max-len */

/*
<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" charset="utf-8" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

<body>
  <div class="container m-3">
    <form class="form-inline">
      <input type="number" required="required" class="form-control mr-3" name="number">
      <input type="submit" class="btn btn-primary mr-3" value="plus">
      <button type="reset" class="btn btn-outline-primary">reset</button>
    </form>
    <div id="result">0</div>
  </div>
  <script type="module" src="./src/index.js"></script>
</body>

</html>
*/

/*
Необходимо реализовать простой калькулятор, который умеет только складывать.
Но делает это для любого количества чисел, а не только двух.

Реализуйте и экспортируйте по умолчанию функцию, реализующую приложение
"суммирующий калькулятор". Калькулятор представляет из себя одно поле для ввода
чисел и две кнопки: сложение и сброс. Под калькулятором выводится текущая
сумма, которая изначально равна нулю. Каждое нажатие кнопки plus добавляет к
этой сумме введенное значение. Нажатие кнопки сброс возвращает состояние к
первоначальному (сумма устанавливается в 0).

Сделайте калькулятор дружественным пользователю: устанавливайте фокус на поле
для ввода при каждой отрисовке формы (включая первую) и очищайте форму после
отправки/очистки.
*/

export default () => {
  const result = document.getElementById('result');
  const inputField = document.querySelector('input[type="number"]');
  const buttonPlus = document.querySelector('input[type="submit"]');
  const buttonReset = document.querySelector('button[type="reset"]');

  const initialValue = 0;
  let state = initialValue;

  const updateResult = () => {
    result.textContent = state;
  };

  const clearAndFocusForm = () => {
    inputField.reset();
    inputField.focus();
  };

  clearAndFocusForm();

  buttonPlus.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(event.target).get('number'); // or inputField.value
    state += parseInt(data, 10);

    clearAndFocusForm();
    updateResult();
  });

  buttonReset.addEventListener('click', (event) => {
    event.preventDefault();

    state = initialValue;
    clearAndFocusForm();
    updateResult();
  });
};

/*
// повторяющийся код удобно вынести в отдельную функцию
const render = (state, formEl, inputEl, resultEl) => {
  formEl.reset();
  inputEl.focus();
  resultEl.textContent = state;
};

export default () => {
  // состояние относится к уровню приложения
  let state = 0;

  const formEl = document.querySelector('form');
  const inputEl = document.querySelector('input[type=number]');
  const resetEl = document.querySelector('button');
  const resultEl = document.querySelector('#result');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    state += parseInt(data.get('number'), 10);
    render(state, formEl, inputEl, resultEl);
  });

  resetEl.addEventListener('click', () => {
    state = 0;
    render(state, formEl, inputEl, resultEl);
  });

  inputEl.focus();
};
*/
