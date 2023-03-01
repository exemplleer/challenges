export const cons = (a, b) => (message) => {
  if (message === 'car') {
    return a;
  }
  if (message === 'cdr') {
    return b;
  }
  return null;
};

export const car = (pair) => pair('car');
export const cdr = (pair) => pair('cdr');

/*

export const cons = (x, y) => (f) => f(x, y);
export const car = (pair) => pair((x, y) => x);
export const cdr = (pair) => pair((x, y) => y);

*/
