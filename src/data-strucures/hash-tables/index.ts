const user = {
  age: 54,
  name: 'Max',
  magic: true,
  greet: () => console.log('Hi!'),
};

user.age; // O(1)
user.name = 'Paul'; // O(1)
user.greet(); // O(1)

const map = new Map();
const set = new Set();

class HashTable {
  private _data: [string, number][][];
  constructor(size: number) {
    this._data = new Array(size);
  }

  private _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this._data.length;
    }

    return hash;
  }

  set(key: string, value: number) {
    const hash = this._hash(key);
    if (!this._data[hash]) {
      this._data[hash] = [];
    }

    this._data[hash].push([key, value]);
    console.log(myHashTable._data);
  }

  get(key: string): number | undefined {
    const hash = this._hash(key);

    const data = this._data[hash];

    for (const [savedKey, value] of data) {
      if (savedKey === key) {
        return value;
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];
    for (const address of this._data) {
      for (const [key] of address) {
        keysArray.push(key);
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(2);

myHashTable.set('grapes', 1000);
myHashTable.set('apples', 2000);
myHashTable.set('onions', 3000);

console.log(myHashTable.keys());

console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.get('onions'));
