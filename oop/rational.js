/*
Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число.
Рациональное число должно быть представлено объектом со следующими методами:
- Сеттер setNumer() - устанавливает числитель
- Сеттер setDenom() - устанавливает знаменатель
- Геттер getNumer() - возвращает числитель
- Геттер getDenom() - возвращает знаменатель
- Геттер toString() - возвращает строковое представление числа
- Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число (не изменяет текущее!)

Примеры:
const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);
rat1.getNumer(); // 3
rat1.getDenom(); // 8

const rat2 = make(10, 3);

const rat3 = rat1.add(rat2);
rat3.toString(); // '89/24'
*/

const make = (numer, denom) => ({
  numer,
  denom,

  setNumer(newNumer) {
    this.numer = newNumer;
  },
  setDenom(newDenom) {
    this.denom = newDenom;
  },

  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },

  toString() {
    return `${this.numer}/${this.denom}`;
  },

  add(rational) {
    const a = this.numer;
    const b = this.denom;
    const c = rational.getNumer();
    const d = rational.getDenom();

    return make(a * d + b * c, b * d);
  },
});

export default make;
