function memoizedAdd80to() {
  const cache: { [key: number]: number } = {};
  return (n: number) => {
    if (n in cache === false) {
      console.log('Long Operation');
      cache[n] = n + 80;
    }

    return cache[n];
  };
}

const add80to = memoizedAdd80to();

console.log(add80to(5));
console.log(add80to(5));
console.log(add80to(5));
