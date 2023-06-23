/*
Нужно реализовать логику добавления алертов по клику на кнопку.
Изначально на странице есть одна кнопка. Верстка выглядит так:

<button id="alert-generator" class="btn btn-primary">Generate Alert</button>
<div class="alerts m-5"></div>

После клика на кнопку в контейнер с классом alerts добавляется алерт Alert 1:

<div class="alerts m-5">
  <div class="alert alert-primary">Alert 1</div>
</div>

Последующий клик добавляет новый алерт первым в списке:

<div class="alerts m-5">
  <div class="alert alert-primary">Alert 2</div>
  <div class="alert alert-primary">Alert 1</div>
</div>

Каждый клик добавляет новый алерт, меняя число в его имени.
Реализуйте и установите обработчик события click на кнопке по логике выше.
*/

export default () => {
  const button = document.getElementById('alert-generator');

  let counter = 0;

  const handler = () => {
    const alerts = document.querySelector('.alerts');

    const newElement = document.createElement('div');
    newElement.classList.add('alert', 'alert-primary');

    const innerText = document.createTextNode(`Alert ${counter += 1}`);
    newElement.append(innerText);

    alerts.prepend(newElement);
  };

  button.addEventListener('click', handler);
};

/*
export default () => {
  // BEGIN
  const button = document.getElementById('alert-generator');
  const alertsBox = document.querySelector('.alerts');
  let i = 1;
  button.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-primary');
    alert.textContent = `Alert ${i}`;

    alertsBox.prepend(alert);

    i += 1;
  });
  // END
};
*/
