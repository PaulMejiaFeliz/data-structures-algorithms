function boooo(n: number) {
  for (let i = 0; i < n; i++) {
    console.log('boooo!');
  }
}

boooo(5); // O(1)

function sayHi(n: number) {
  const his: string[] = [];
  for (let i = 0; i < n; i++) {
    his[i] = 'hi';
  }

  return his;
}

sayHi(5); // O(n)