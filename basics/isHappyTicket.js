/*
"Счастливым" называют билет с номером, в котором сумма первой половины цифр
равна сумме второй половины цифр. Номера могут быть произвольной длины, с
единственным условием, что количество цифр всегда чётно, например: 33 или 2341
и так далее.
Билет с номером 385916 — счастливый, так как 3 + 8 + 5 === 9 + 1 + 6.
Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 !== 0 + 0 + 2.

Реализуйте и экспортируйте по умолчанию функцию, проверяющую является ли номер
счастливым (номер — всегда строка). Функция должна возвращать true, если билет
счастливый, или false, если нет.

Примеры:
isHappyTicket('385916'); // true
isHappyTicket('231002'); // false
isHappyTicket('1222');   // false
isHappyTicket('054702'); // true
isHappyTicket('00');     // true
*/

const sum = (str) => str.split('').reduce((acc, char) => acc + Number(char), 0);

const isHappyTicket = (ticket) => {
  if (ticket.length % 2 !== 0) {
    return false;
  }

  const separator = Math.floor(ticket.length / 2);
  const left = ticket.substring(0, separator);
  const right = ticket.substring(separator);

  const leftSum = sum(left);
  const rightSum = sum(right);

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
