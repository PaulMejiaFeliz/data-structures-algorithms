class LinkedListNode<T> {
  constructor(public value: T, public next?: LinkedListNode<T> | undefined) {}
}

class LinkedList<T> {
  public head: LinkedListNode<T>;
  public tail: LinkedListNode<T>;
  public length: number;

  constructor(value: T) {
    this.head = new LinkedListNode(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value: T): LinkedList<T> {
    const node = new LinkedListNode(value);

    this.tail.next = node;
    this.tail = node;

    this.length++;

    return this;
  }

  prepend(value: T): LinkedList<T> {
    const node = new LinkedListNode(value, this.head);

    this.head = node;

    this.length++;

    return this;
  }

  insert(index: number, value: T): LinkedList<T> {
    if (index > this.length) {
      throw new Error('Index out of bound');
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.length) {
      return this.append(value);
    }

    let prevNode = this.traverseToIndex(index - 1);
    const node = new LinkedListNode(value, prevNode.next);
    prevNode.next = node;

    this.length++;

    return this;
  }

  remove(index: number): LinkedList<T> {
    if (index >= this.length) {
      throw new Error('Index out of bound');
    }

    if (index === 0) {
      this.head = this.head.next as LinkedListNode<T>;
      this.length--;

      return this;
    }

    let prevNode = this.traverseToIndex(index - 1);
    let node = prevNode.next;

    if (!node || !node.next) {
      prevNode.next = undefined;
      this.tail = prevNode;
      this.length--;

      return this;
    }

    prevNode.next = node.next;
    this.length--;

    return this;
  }

  traverseToIndex(index: number): LinkedListNode<T> {
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

  toArray(): T[] {
    const values: T[] = [];

    let node: LinkedListNode<T> | undefined = this.head;
    while (node) {
      values.push(node.value);
      node = node.next;
    }

    return values;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(0, 30);
myLinkedList.insert(myLinkedList.length, 50);

console.log(myLinkedList.toArray());

myLinkedList.remove(4);
myLinkedList.remove(0);
myLinkedList.remove(myLinkedList.length - 1);

console.log(myLinkedList.toArray());
