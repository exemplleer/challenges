/*
Реализуйте и экспортируйте функцию по умолчанию, которая создает на странице
TODO-приложение. Это приложение состоит из формы добавления (уже есть на
странице) и списка задач добавленных через форму. Каждая новая задача
выводится первой в списке добавленных ранее задач.

Начальный HTML:

<div class="container m-3">
  <form class="form-inline">
    <input type="text" required="required" class="form-control mr-3" name="name">
    <button type="submit" class="btn btn-primary mr-3">add</button>
  </form>
  <ul id="tasks" class="list-group" aria-label="Tasks"></ul>
</div>

После добавления двух задач:

<div class="container m-3">
  <form class="form-inline">
    <input type="text" required="required" class="form-control mr-3" name="name">
    <button type="submit" class="btn btn-primary mr-3">add</button>
  </form>
  <ul id="tasks" class="list-group" aria-label="Tasks">
    <li class="list-group-item">Вторая задача</li>
    <li class="list-group-item">Первая задача</li>
  </ul>
</div>

У нашего TODO-приложения есть бэкенд. Этот бэкенд умеет получать новые задачи
и возвращать список ранее добавленных задач.

import axios from 'axios';
// Список добавленных задач GET
const response = await axios.get(routes.tasksPath());
// response.data содержит объект: { items: [{ name: 'имя задачи' }, { ... }]  }
// Добавление новой задачи POST
const response = await axios.post(routes.tasksPath(), data);
// Где data это { name: 'имя задачи' }
// response.status содержит 201 в случае успеха

Во время инициализации (внутри функции), приложение должно делать запрос на
сервер, извлекать оттуда уже добавленные задачи и выводить их на экран. Во
время добавления новой задачи, приложение должно выполнять запрос на добавление
задачи на сервер.
*/

import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

export default () => {
  const state = {};

  const form = document.querySelector('.form-inline');
  const input = document.querySelector('input[type="text"]');
  const button = document.querySelector('button[type="submit"]');
  const tasks = document.querySelector('#tasks');

  const postItem = async (item) => {
    await axios.post(routes.tasksPath(), { name: item });
  };

  const render = async () => {
    state.todo = (await axios.get(routes.tasksPath())).data;
    tasks.innerHTML = '';

    const { items } = state.todo;
    items.forEach(({ name: taskName }) => {
      const elem = document.createElement('li');
      elem.className = 'list-group-item';
      elem.textContent = taskName;
      tasks.append(elem);
    });
  };

  render();

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(form).get('name');
    postItem(formData);
    render();

    form.reset();
    input.focus();
  });
};

/*
import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

const render = (state, { form, input, tasksContainer }) => {
  form.reset();
  input.focus();
  const tasksElements = state.tasks.map((task) => {
    const el = document.createElement('li');
    el.classList.add('list-group-item');
    el.textContent = task.name;
    return el;
  });

  tasksContainer.replaceChildren(...tasksElements);
};

const app = async () => {
  const response = await axios.get(routes.tasksPath());

  const state = {
    tasks: response.data.items,
  };

  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const tasksContainer = document.querySelector('#tasks');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
    };
    try {
      await axios.post(routes.tasksPath(), data);
      state.tasks.unshift(data);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }

    render(state, { form, input, tasksContainer });
  });

  render(state, { form, input, tasksContainer });
};

export default app;
*/
