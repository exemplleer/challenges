/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход
строку, состоящую только из открывающих и закрывающих скобок разных типов,
и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие
скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается
сбалансированной. Строка считается корректной (сбалансированной), если
содержащаяся в ней скобочная структура
соответствует требованиям:
  - Скобки — это парные структуры. У каждой открывающей скобки должна быть
    соответствующая ей закрывающая скобка.
  - Скобки должны закрываться в правильном порядке.

Примеры:
isBracketStructureBalanced('(>');  // false
isBracketStructureBalanced('()');  // true
isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('({}[])');  // true
isBracketStructureBalanced('{<>}}'); // false
isBracketStructureBalanced('([)]'); // false
*/

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (structure) => {
  const stack = [];
  for (let i = 0; i < structure.length; i += 1) {
    const char = structure[i];

    if (openingSymbols.includes(char)) {
      stack.push(char);
    } else if (closingSymbols.includes(char)) {
      const openSymbol = openingSymbols[closingSymbols.indexOf(char)];
      if (stack.pop() !== openSymbol) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

export default isBracketStructureBalanced;

/*
const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => {
  for (let i = 0; i < closingSymbols.length; i += 1) {
    if (openingSymbols[i] === symbol) {
      return closingSymbols[i];
    }
  }
  return null;
};

export default (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
*/
