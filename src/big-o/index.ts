const nemo = ['nemo'];

const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];

const large = new Array(1000).fill('nemo');

function findNemo(array: string[]) {
  const t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }

  const t1 = performance.now();
  console.log(`Call to findNemo took ${t1 - t0} milliseconds`);
}

console.log('Finding Nemo');

findNemo(nemo);
findNemo(everyone);
findNemo(large);
