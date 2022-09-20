class Stack<T> {
  data: T[] = [];

  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  push(value: T): void {
    this.data.push(value);
  }

  pop(): T | undefined {
    return this.data.pop();
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

console.log('PEEK', myStack.peek());

export {};
