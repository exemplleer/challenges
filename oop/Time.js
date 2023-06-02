/*
Добавьте в класс Time статический метод fromString(), который позволяет
создавать объекты Time на основе времени переданного строкой формата
часы:минуты.

Примеры:
const time = new Time(10, 15);
console.log(`The time is ${time}`); // => 'The time is 10:15'

const time = Time.fromString('10:23');
// автоматически вызывается метод toString()
console.log(`The time is ${time}`); // 'The time is 10:23'

*/

export default class Time {
  static fromString(str) {
    const [hours, minutes] = str.split(':');
    return new this(hours, minutes); // or new Time(hours, minutes)
  }

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
