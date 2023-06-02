/*
Реализуйте в классе Truncater конструктор и метод truncate(). Метод принимает
текст и следующие опции:
- separator - символ, заменяющий обрезанную часть строки
- length - максимальная длина исходной строки. Если строка не длинне, чем эта
  опция, то возвращается исходная строка.
Конфигурацию по умолчанию можно переопределить через конструктор класса и
вторым аргументом метода truncate(). Оба способа можно комбинировать.

Примеры:
const truncater = new Truncater();
truncater.truncate('one two'); // 'one two'
truncater.truncate('one two', { 'length': 6 }); // 'one tw...'

const truncater = new Truncater({ 'length': 6 });
truncater.truncate('one two', { 'separator': '.' }); // 'one tw.'
truncater.truncate('one two', { 'length': 3 }); // 'one...'
*/

export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  constructor(options = {}) {
    this.options = { ...this.constructor.defaultOptions, ...options };
  }

  truncate(text, options = {}) {
    const { length, separator } = { ...this.options, ...options };

    if (text.length <= length) {
      return text;
    }

    return `${text.substr(0, length)}${separator}`;
  }
}
