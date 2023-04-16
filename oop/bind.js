/*
Реализуйте и экспортируйте по умолчанию функцию, которая ведет себя аналогично встроенной bind(obj, fn). Аргументы функции:
- obj – объект выступающий в роли контекста
- fn() – функция привязываемая к контексту
Примечания:
- Ограничение: для реализации нельзя пользоваться только встроенной функцией bind()
- Для решения можно использовать apply() или call()
Примеры:
const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);
fnWithContext(3); // 8
*/

const bind = (obj, fn) => (...args) => fn.apply(obj, args);

export default bind;
