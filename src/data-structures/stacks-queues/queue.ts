class Node<T> {
  next: Node<T> | undefined;
  constructor(public value: T) {}
}

class Queue<T> {
  first: Node<T> | undefined = undefined;
  last: Node<T> | undefined = undefined;
  length = 0;

  peek(): T | undefined {
    return this.first?.value;
  }

  enqueue(value: T): void {
    const node = new Node(value);

    if (!this.last) {
      this.first = node;
      this.last = node;
      this.length = 1;
      return;
    }

    this.last.next = node;
    this.last = node;
    this.length++;
  }

  dequeue(): T | undefined {
    if (!this.first) {
      return undefined;
    }

    if (this.first === this.last) {
      this.last = undefined;
    }

    const { value } = this.first;

    this.first = this.first.next;
    this.length--;

    return value;
  }
}

const myQueue = new Queue();

myQueue.enqueue('Discord');
myQueue.enqueue('Udemy');
myQueue.enqueue('Google');

console.log('PEEK', myQueue.peek());

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log('PEEK', myQueue.peek());

export {};
