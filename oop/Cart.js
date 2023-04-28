/* 
Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя
покупательскую корзину. Интерфейс:
- addItem(item, count) добавляет в корзину товары и их количество. Товар это
  объект у которого два свойства: name – имя и price – стоимость.
- getItems возвращает товары в формате [{ item, count }, { item, count }, ...]
- getCost возвращает стоимость корзины. Общая стоимость корзины высчитывается
  как стоимость всех добавленных товаров с учетом их количества.
- getCount возвращает количество товаров в корзине.
*/

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    const items = this.getItems();
    items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    const items = this.getItems();
    const totalCost = items.reduce(
      (acc, { item: { price }, count }) => acc + price * count,
      0,
    );
    return totalCost;
  }

  getCount() {
    const items = this.getItems();
    const totalCount = items.reduce((acc, { count }) => acc + count, 0);

    return totalCount;
  }
}

export default Cart;
