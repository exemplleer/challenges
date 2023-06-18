/*
Реализуйте и экспортируйте функцию по умолчанию, которая находит дочерние
текстовые узлы внутри элемента <div> и оборачивает текст в параграф. Переводы
строк и отступы изменяться не должны.

- Очистка строки от пробельных символов: trim
- Замена узлов: node.replaceWith()
- Проверка текстовых узлов: node instanceof Text

Пример:
<body>
  <div>
    <div>complex<div>test</div></div>
    <div>Text</div>
    <p>Op</p>
  </div>
  <div>My</div>
</body>

prettify(document);

<body>
  <div>
    <div><p>complex</p><div><p>test</p></div></div>
    <div><p>Text</p></div>
    <p>Op</p>
  </div>
  <div><p>My</p></div>
</body>
*/

export default (document) => {
  const divs = document.querySelectorAll('div');
  divs.forEach((div) => {
    const nodes = div.childNodes;
    nodes.forEach((node) => {
      if (node instanceof Text) {
        const content = node.textContent.trim();

        if (content !== '') {
          const el = document.createElement('p');
          el.append(content);
          node.replaceWith(el);
        }
      }
    });
  });
};

/*
export default (document) => {
  const divs = [...document.getElementsByTagName('div')];
  divs.forEach((div) => {
    const textNodes = [...div.childNodes]
      .filter((child) => child instanceof Text)
      .filter((child) => child.textContent.trim() !== '');
    textNodes.forEach((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};
*/
