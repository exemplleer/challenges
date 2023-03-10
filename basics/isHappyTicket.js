/*
Реализуйте и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер —
всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.

"Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй
половины цифр. Номера могут быть произвольной длины, с единственным условием, что количество цифр
всегда чётно, например: 33 или 2341 и так далее.
Билет с номером 385916 — счастливый, так как 3 + 8 + 5 === 9 + 1 + 6. Билет с номером 231002 не
является счастливым, так как 2 + 3 + 1 !== 0 + 0 + 2.
*/

const isHappyTicket = (str) => {
  if (str.length % 2 !== 0) {
    return false;
  }

  const sep = str.length / 2;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < sep; i += 1) {
    leftSum += Number(str[i]);
    rightSum += Number(str[str.length - (i + 1)]);
  }
  return leftSum === rightSum;
};

export default isHappyTicket;

/*

export default (num) => {
  let balance = 0;

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += +num[i] - +num[j];
  }
  return balance === 0;
};

*/
