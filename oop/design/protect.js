/*
JavaScript долгое время не поддерживал приватных свойств и методов. Для них
появилось соглашение об именовании с нижнего подчёркивания _, чтобы
предотвратить доступ ко внутренностям объекта в обход интерфейса. Но сама
возможность прямого доступа остаётся. Нам предстоит разработать обёртку над
объектом, защищающую его приватные свойства от прямого доступа.
protect.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и
позволяет обращаться только к "публичным" свойствам и методам. При попытке
прочитать или перезаписать приватное или несуществующее свойство должно
выбрасываться исключение. В реализации используйте Proxy.

Примеры:
import protect from '../protect.js';

class Course {
  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }
}

const course = new Course('Object-oriented design');
const protectedCourse = protect(course);

course.getName(); // "Object-oriented design"
protectedCourse.getName(); // "Object-oriented design"
course._name; // "Object-oriented design"
course._nonExists; // undefined

protectedCourse._name; // Error
protectedCourse._name = 'OOD'; // Error
protectedCourse._nonExists; // Error
*/

/* eslint-disable no-param-reassign */

const validate = (target, prop) => {
  if (prop.startsWith('_')) {
    throw new Error(`'${prop}' is private property!`);
  }

  if (typeof target[prop] === 'undefined') {
    throw new Error(`'${prop}' does not exist!`);
  }
};

export default (obj) => {
  const handler = {
    get: (target, property) => {
      validate(target, property);

      if (typeof target[property] === 'function') {
        return target[property].bind(obj);
      }

      return target[property];
    },

    set: (target, property, value) => {
      validate(target, property);

      target[property] = value;
      return true;
    },
  };

  return new Proxy(obj, handler);
};
