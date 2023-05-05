/* 
Двоичное дерево поиска состоит из узлов, каждый из которых содержит значение
ключа и два поддерева (левое и правое), которые в свою очередь также являются
двоичными деревьями. Правильное дерево не содержит повторяющихся ключей, и для
каждого узла гарантируется, что в левом поддереве все значения меньше текущего,
а в правом — больше.

Реализуйте и экспортируйте по умолчанию класс, который реализует представление
узла. Конструктор класса принимает на вход значение ключа (число), и двух детей,
которые в свою очередь также являются узлами. Дерево может быть создано пустым.
Класс должен содержать методы:
- Геттер getKey() — возвращает ключ. Если дерево пустое, возвращает null.
- Геттеры getLeft(), getRight() — возвращают соответственно левого и правого
  ребёнка. Если ребёнок в узле отсутствует, геттер возвращает null.
- search(key) — выполняет поиск узла в правильном двоичном дереве по ключу и
  возвращает узел. Если узел не найден, возвращается null.
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
}

export default Node;
