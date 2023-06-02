const findSmallestIndex = (arr) => arr.indexOf(Math.min(...arr));

const selectionSort = (arr) => {
  const newArr = [...arr];

  return newArr.reduce((acc) => {
    const smallestIndex = findSmallestIndex(newArr);
    acc.push(newArr[smallestIndex]);
    newArr[smallestIndex] = Infinity;
    return acc;
  }, []);
};

export default selectionSort;
