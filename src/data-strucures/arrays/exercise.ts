function reverse(str: string) {
  const chars = str.split('');

  let reversed = '';
  for (let i = chars.length - 1; i >= 0; i--) {
    reversed = reversed + chars[i];
  }

  return reversed;
}

function reverse2(str: string) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

function reverse3(str: string) {
  return str.split('').reverse().join();
}

console.log('Reversed: ', reverse('Paul Mejia'));
console.log('Reversed: ', reverse2('Paul Mejia'));
console.log('Reversed: ', reverse3('Paul Mejia'));

function mergeSortedArrays(a: number[], b: number[]) {
  const longArray = a.length > b.length ? a : b;
  const shortArray = a.length < b.length ? a : b;

  const result: number[] = []
  let longIndex = 0
  let shortIndex = 0
  while (longIndex < longArray.length) {
    if (shortArray[shortIndex] < longArray[longIndex]) {
      result.push(shortArray[shortIndex++])
      continue
    }

    result.push(longArray[longIndex++])
  }

  return result
}

function mergeSortedArrays2(a: number[], b: number[]) {
  return [...a, ...b].sort((a: number, b: number) => a - b)
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
