/*
Реализуйте и экспортируйте по умолчанию абстракцию "Деньги". Она знает о валюте
денег, позволяет их конвертировать в другие валюты, выполнять арифметические
операции и форматировать вывод. Список методов:
- Money(value, currency = 'usd') – создает объект-деньги.
- Money.prototype.getValue() – возвращает стоимость в виде числа
- Money.prototype.getCurrency() – возвращает валюту денег
- Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где
  значение конвертировано в указанную валюту
- Money.prototype.add(money) – возвращает новый объект-деньги, который
  представляет из себя сумму исходных и переданных денег, в валюте исходных
  денег (внутри возможна конвертация если валюты не совпадают)
- Money.prototype.format() – возвращает локализованное представление денег
  удобное для вывода

Наша реализация поддерживает только две валюты: usd и eur без возможности
расширения. Коэффициенты конверсии:
- usd -> eur = 0.7
- eur -> usd = 1.2

Примеры:
const money1 = new Money(100);
// Возвращает значение
money1.getValue(); // 100
money1.getCurrency(); // 'usd'
// Конвертирует в указанную валюту и возвращает новое значение
money1.exchangeTo('eur').getValue(); // 70
const money2 = new Money(200, 'eur');
money2.getValue(); // 200
const money3 = money2.add(money1);
money3.getValue(); // 270
const money4 = money3.add(money1);
money4.getValue(); // 340
money1.format(); // "$100.00"
money2.format(); // "€200.00"
const money5 = new Money(10000);
money5.format(); // "$10,000.00"
*/

function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

Money.prototype.exchangeTo = function exchangeTo(outerCurrency) {
  const innerValue = this.value;
  const innerCurrency = this.currency;

  if (innerCurrency === outerCurrency) {
    return new Money(innerValue, innerCurrency);
  }
  return new Money(
    innerValue * rates[innerCurrency][outerCurrency],
    outerCurrency,
  );
};

Money.prototype.add = function add(money) {
  const innerValue = this.value;
  const innerCurrency = this.currency;

  const outurValue = money.getValue();
  const outerCurrency = money.getValue();

  if (innerCurrency !== outerCurrency) {
    const exchanged = money.exchangeTo(innerCurrency);
    return new Money(innerValue + exchanged.getValue(), innerCurrency);
  }
  return new Money(innerValue + outurValue, innerCurrency);
};

Money.prototype.format = function format() {
  const innerValue = this.value;
  const innerCurrency = this.currency;

  return innerValue.toLocaleString(undefined, {
    style: 'currency',
    currency: innerCurrency,
  });
};

export default Money;
