const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.round((right - left) / 2) + left;

    if (arr[mid] === target) {
      return mid;
    }
    if (target > arr[mid]) {
      left = mid + 1;
    }
    if (target < arr[mid]) {
      right = mid - 1;
    }
  }
  return null;
};

export default binarySearch;
