/*
Двоичное дерево поиска состоит из узлов, каждый из которых содержит значение
ключа и два поддерева (левое и правое), которые в свою очередь также являются
двоичными деревьями. Правильное дерево не содержит повторяющихся ключей, и для
каждого узла гарантируется, что в левом поддереве все значения меньше текущего,
а в правом — больше.

Реализуйте и экспортируйте по умолчанию класс, который реализует представление
узла. Конструктор класса принимает на вход значение ключа (число), и двух
детей, которые в свою очередь также являются узлами. Дерево может быть создано
пустым. Класс должен содержать методы:
- Геттер getKey() — возвращает ключ. Если дерево пустое, возвращает null.
- Геттеры getLeft(), getRight() — возвращают соответственно левого и правого
  ребёнка. Если ребёнок в узле отсутствует, геттер возвращает null.
- search(key) — выполняет поиск узла в правильном двоичном дереве по ключу и
  возвращает узел. Если узел не найден, возвращается null.
- Метод insert(key) — выполняет добавление узла, формируя правильное двоичное
  дерево.
- getCount() — возвращает количество узлов в дереве.
- getSum() — возвращает сумму всех ключей дерева.
- toArray() — возвращает одномерный массив содержащий все ключи.
- toString() — возвращает строковое представление дерева.
- every(fn) — проверяет, удовлетворяют ли все ключи дерева условию, заданному
  в передаваемой функции.
- some(fn) - проверяет, удовлетворяет ли какой-либо ключ дерева условию,
  заданному в передаваемой функции.
*/

class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  search(target) {
    if (this.getKey() === target) {
      return this;
    }

    if (this.getKey() > target && this.getLeft() !== null) {
      return this.getLeft().search(target);
    }

    if (this.getKey() < target && this.getRight() !== null) {
      return this.getRight().search(target);
    }

    return null;
  }

  insert(number) {
    if (this.getKey() < number) {
      if (this.getRight() === null) {
        this.right = new Node(number);
      }
      this.getRight().insert(number);
    }

    if (this.getKey() > number) {
      if (this.getLeft() === null) {
        this.left = new Node(number);
      }
      this.getLeft().insert(number);
    }
  }

  toArray(acc = []) {
    acc.push(this.getKey());

    if (this.getLeft() !== null) {
      this.getLeft().toArray(acc);
    }

    if (this.getRight() !== null) {
      this.getRight().toArray(acc);
    }

    return acc;
  }

  getCount() {
    return this.toArray().length;
  }

  getSum() {
    return this.toArray().reduce((sum, num) => sum + num, 0);
  }

  toString() {
    const arr = this.toArray();
    return `(${arr.join(', ')})`;
  }

  every(fn) {
    const arr = this.toArray();
    const filtered = arr.filter(fn);
    return arr.length === filtered.length;
  }

  some(fn) {
    const arr = this.toArray();
    const filtered = arr.filter(fn);
    return filtered.length !== 0;
  }
}

export default Node;
