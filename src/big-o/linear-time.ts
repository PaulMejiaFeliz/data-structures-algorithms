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
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

console.log('Finding Nemo');

// findNemo(nemo);
// findNemo(everyone);
findNemo(large); // O(n) --> Linear Time