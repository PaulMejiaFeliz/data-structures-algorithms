let counter = 0;
function inception(): string {
  console.log(counter);

  if (counter > 3) {
    return 'Done!';
  }

  counter++;

  return inception();
}

console.log(inception());
