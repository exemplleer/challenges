/* 
Реализуйте генератор случайных чисел, представленный классом Random. Интерфейс
объекта включает в себя три функции:
- Конструктор. Принимает на вход seed, начальное число генератора
  псевдослучайных чисел.
- getNext() — метод, возвращающий новое случайное число.
- reset() — метод, сбрасывающий генератор на начальное значение.
Экспортируйте класс по умолчанию.
*/

export default class Random {
  constructor(seed) {
    this.seed = seed;
    this.init = this.seed;
  }

  getNext() {
    const a = 16807;
    const m = 2147483647;

    this.seed = (this.seed * a) % m;
    return this.seed;
  }

  reset() {
    this.seed = this.init;
    return true;
  }
}
