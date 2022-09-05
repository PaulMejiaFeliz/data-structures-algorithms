const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array: number[]) {
  return sort(array, 0, array.length - 1);

  function sort(array: number[], left: number, right: number) {
    const start = left;
    const end = right;

    while (left < right) {
      if (array[left] <= array[right]) {
        left++;
        continue;
      }

      let temp = array[right - 1];
      array[right - 1] = array[right];
      array[right] = temp;

      if (left < right - 1) {
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;
      }

      right--;
    }

    if (start < right - 1) {
      sort(array, start, right - 1);
    }

    if (right + 1 < end) {
      sort(array, right + 1, end);
    }
  }
}

quickSort(numbers);
console.log(numbers);

export {};
