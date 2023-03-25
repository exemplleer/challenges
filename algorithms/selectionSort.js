const findSmallestIndex = (arr) => arr.indexOf(Math.min(...arr));

const selectionSort = ([...arr]) =>
  arr.reduce((acc) => {
    const smallestIndex = findSmallestIndex(arr);
    acc.push(arr[smallestIndex]);
    arr[smallestIndex] = Infinity;
    return acc;
  }, []);
