/* 
point.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя
свойствами, представляющими координаты на плоскости x и y и геттеры для
извлечения этих свойств: getX и getY. На основании пройденого материала
выберите тот способ организовать работу абстракции, который считаете нужным.

segment.js
Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя
свойствами beginPoint и endPoint и геттеры для извлечения этих свойств:
getBeginPoint и getEndPoint.

reverseSegment.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
отрезок и возвращает новый отрезок с точками, добавленными в обратном порядке
(begin меняется местами с end).
Точки в результирующем отрезке должны быть копиями (по значению)
соответствующих точек исходного отрезка. То есть они не должны быть ссылкой на
один и тот же объект, так как это разные объекты (пускай и с одинаковыми
координатами). Для создания копий используйте соответствующие конструкторы.
*/

// <--- point.js --->
function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

export { Point };
// <--- point.js --->

// <--- segment.js --->
function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

export { Segment };
// <--- segment.js --->

// <--- reverseSegment.js --->
const reverseSegment = (segment) => {
  const beginPointX = segment.getBeginPoint().getX();
  const beginPointY = segment.getBeginPoint().getY();
  const endPointX = segment.getEndPoint().getX();
  const endPointY = segment.getEndPoint().getY();

  const newBeginPoint = new Point(endPointX, endPointY);
  const newEndPoint = new Point(beginPointX, beginPointY);

  return new Segment(newBeginPoint, newEndPoint);
};

export default reverseSegment;
// <--- reverseSegment.js --->
