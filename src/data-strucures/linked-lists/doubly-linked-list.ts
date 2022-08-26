class DoublyLinkedListNode<T> {
  constructor(
    public value: T,
    public prev?: DoublyLinkedListNode<T> | undefined,
    public next?: DoublyLinkedListNode<T> | undefined
  ) {}
}

class DoublyLinkedList<T> {
  public head: DoublyLinkedListNode<T>;
  public tail: DoublyLinkedListNode<T>;
  public length: number;

  constructor(value: T) {
    this.head = new DoublyLinkedListNode(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value: T): DoublyLinkedList<T> {
    const node = new DoublyLinkedListNode(value, this.tail);

    this.tail.next = node;
    this.tail = node;

    this.length++;

    return this;
  }

  prepend(value: T): DoublyLinkedList<T> {
    const node = new DoublyLinkedListNode(value, undefined, this.head);

    this.head.prev = node;
    this.head = node;

    this.length++;

    return this;
  }

  insert(index: number, value: T): DoublyLinkedList<T> {
    if (index > this.length) {
      throw new Error('Index out of bound');
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.length) {
      return this.append(value);
    }

    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next;
    const currentNode = new DoublyLinkedListNode(value, prevNode, nextNode);

    prevNode.next = currentNode;

    if (nextNode) {
      nextNode.prev = currentNode;
    }

    this.length++;

    return this;
  }

  remove(index: number): DoublyLinkedList<T> {
    if (!this.length) {
      throw new Error('Cannot remove last node');
    }

    if (index >= this.length) {
      throw new Error('Index out of bound');
    }

    if (index === 0) {
      this.head = this.head.next as DoublyLinkedListNode<T>;
      this.head.prev = undefined;
      this.length--;

      return this;
    }

    if (index === this.length - 1) {
      this.tail = this.tail.prev as DoublyLinkedListNode<T>;
      this.tail.next = undefined;
      this.length--;

      return this;
    }

    const prevNode = this.traverseToIndex(index - 1);
    const currentNode = prevNode.next;
    const nextNode = currentNode?.next;

    if (!currentNode || !nextNode) {
      prevNode.next = undefined;
      this.tail = prevNode;
      this.length--;

      return this;
    }

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;

    return this;
  }

  traverseToIndex(index: number): DoublyLinkedListNode<T> {
    if (index >= this.length) {
      throw new Error('Index out of bound');
    }

    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode?.next && currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  toArray(): [T | undefined, T, T | undefined][] {
    const values: [T | undefined, T, T | undefined][] = [];

    let node: DoublyLinkedListNode<T> | undefined = this.head;
    while (node) {
      values.push([node.prev?.value, node.value, node.next?.value]);
      node = node.next;
    }

    return values;
  }
}

console.log('Creates List with 10');
const myLinkedList = new DoublyLinkedList(10);

console.log(myLinkedList.toArray());
console.log('Appends 5 and 16');

myLinkedList.append(5);
myLinkedList.append(16);

console.log(myLinkedList.toArray());
console.log('Prepends 1');

myLinkedList.prepend(1);

console.log(myLinkedList.toArray());
console.log('Inserts 99 in 2');

myLinkedList.insert(2, 99);

console.log(myLinkedList.toArray());
console.log('Inserts 30 in 0');

myLinkedList.insert(0, 30);

console.log(myLinkedList.toArray());
console.log('Inserts 50 at the end');

myLinkedList.insert(myLinkedList.length, 50);

console.log(myLinkedList.toArray());
console.log('Removes 4');

myLinkedList.remove(4);

console.log(myLinkedList.toArray());
console.log('Removes 0');

myLinkedList.remove(0);

console.log(myLinkedList.toArray());
console.log('Removes last');

myLinkedList.remove(myLinkedList.length - 1);

console.log(myLinkedList.toArray());

export {};
