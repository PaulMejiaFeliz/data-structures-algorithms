const cache: { [key: number]: number } = {};

function add80to(n: number) {
  if (n in cache === false) {
    console.log('Long Operation');
    cache[n] = n + 80;
  }

  return cache[n];
}

console.log(add80to(5));
console.log(add80to(5));
console.log(add80to(5));
