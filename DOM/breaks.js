/*
Извлеките содержимое тега <body> и оберните каждую строку в тег <p>.
Получившееся тело вставьте обратно. Чтобы получить из содержимого <body>
независимые строки, нужно разбить тело по переводу строки.

Было:
<body>
  one
  two
  three
</body>

Стало:
<body>
  <p>one</p>
  <p>two</p>
  <p>three</p>
</body>
*/

const text = document.body.innerHTML.trim();
const lines = text.split('\n');
const tags = lines.map((line) => `<p>${line.trim()}</p>`);
document.body.innerHTML = tags.join('\n');
