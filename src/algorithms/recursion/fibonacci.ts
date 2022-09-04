// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(index: number): number {
  if (index <= 1) {
    return index;
  }

  let last = 1;
  let current = 1;

  for (let i = 3; i <= index; i++) {
    const next = last + current;
    last = current;
    current = next;
  }

  return current;
}

function fibonacciRecursive(index: number): number {
  if (index <= 1) {
    return index;
  }

  return fibonacciRecursive(index - 2) + fibonacciRecursive(index - 1);
}

console.log('Index 0');
console.log(fibonacciIterative(0));
console.log(fibonacciRecursive(0));
console.log();

console.log('Index 1');
console.log(fibonacciIterative(1));
console.log(fibonacciRecursive(1));
console.log();

console.log('Index 2');
console.log(fibonacciIterative(2));
console.log(fibonacciRecursive(2));
console.log();

console.log('Index 3');
console.log(fibonacciIterative(3));
console.log(fibonacciRecursive(3));
console.log();

console.log('Index 4');
console.log(fibonacciIterative(4));
console.log(fibonacciRecursive(4));
console.log();

console.log('Index 5');
console.log(fibonacciIterative(5));
console.log(fibonacciRecursive(5));
