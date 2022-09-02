class Node<T> {
  next: Node<T> | undefined;
  constructor(public value: T) {}
}

class Stack<T> {
  top: Node<T> | undefined = undefined;
  bottom: Node<T> | undefined = undefined;
  length = 0;

  peek(): T | undefined {
    return this.top?.value;
  }

  push(value: T): void {
    const node = new Node(value);

    if (!this.length) {
      this.bottom = node;
      this.top = node;
      this.length = 1;
      return;
    }

    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop(): T | undefined {
    if (!this.top) {
      return undefined;
    }

    const { value } = this.top;

    this.top = this.top.next;
    this.length--;

    if (!this.top) {
      this.bottom = undefined;
    }

    return value;
  }
}

const myStack = new Stack();

myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');

console.log('PEEK', myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

export {};
