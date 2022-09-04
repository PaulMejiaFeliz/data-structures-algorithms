// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number: number): number {
  if (number <= 1) {
    return 1;
  }

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number: number): number {
  let factorial = 1;

  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log('0!');
console.log(findFactorialIterative(0));
console.log(findFactorialRecursive(0));
console.log();

console.log('1!');
console.log(findFactorialIterative(1));
console.log(findFactorialRecursive(1));
console.log();

console.log('2!');
console.log(findFactorialIterative(2));
console.log(findFactorialRecursive(2));
console.log();

console.log('5!');
console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
