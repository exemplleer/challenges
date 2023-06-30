/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  </head>
  <body>
    <div class="container m-3">
      <div class="root"></div>
    </div>
    <script type="module" src="./src/index.js" ></script>
  </body>
</html>
*/

/*
Реализуйте и экспортируйте по умолчанию функцию игры крестики-нолики на поле
из 9 ячеек (представлены таблицей). В упражнении дается готовая функция
генерации поля. Воспользуйтесь ей для инициализации игры. Поле нужно добавить
в тег с классом .root. Затем по клику игра ставит поочередно x и o на поле.
Подразумевается, что оба игрока играют за одним компьютером и просто кликают
по очереди. Выигрыш в игре никак не отмечается.

- Достаточно повесить событие на всю таблицу и использовать возможности
  всплытия
- Ход меняется на каждый клик, в том числе по заполненной ячейке, при этом
  значение в заполненной ячейке остается прежним
*/

const generateField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = 'py-2 px-3';
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;
};

export default () => {
  let player = 'x';

  const switchPlayer = () => {
    player = player === 'x' ? 'o' : 'x';
  };

  const handle = (event) => {
    const { target } = event;
    if (target.textContent === 's') {
      target.textContent = player;
    }

    switchPlayer();
  };

  const root = document.querySelector('.root');
  const field = generateField();
  root.append(field);
  field.addEventListener('click', handle);
};
