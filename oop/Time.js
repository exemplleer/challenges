/* 
Добавьте в класс Time статический метод fromString(), который позволяет
создавать объекты Time на основе времени переданного строкой формата
часы:минуты.
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
