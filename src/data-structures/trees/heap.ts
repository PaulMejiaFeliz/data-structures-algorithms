abstract class Heap<T> {
  private heap: T[];
  protected abstract compare(a: T, b: T): number;

  constructor(elements?: T[]) {
    this.heap = [];

    if (elements) {
      this.heap = elements;
      this.heapify();
    }
  }

  private heapify(): void {
    let i = Math.max(0, Math.floor(this.size() / 2) - 1);
    for (; i >= 0; i--) {
      this.sink(i);
    }
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  add(element: T): void {
    this.heap.push(element);
    this.swim(this.size() - 1);
  }

  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.heap[0];
  }

  contains(element: T): boolean {
    return this.heap.includes(element);
  }

  poll(): T | null {
    if (this.isEmpty()) return null;

    return this.removeAt(0);
  }

  remove(element: T): boolean {
    const elementIndex = this.heap.indexOf(element);
    if (elementIndex === -1) return false;

    this.removeAt(elementIndex);
    return true;
  }

  private sink(k: number): void {
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(k);
      const rightChildIndex = this.getRightChildIndex(k);

      let smallestChildIndex = leftChildIndex;
      if (
        rightChildIndex < this.size() &&
        this.less(rightChildIndex, leftChildIndex)
      ) {
        smallestChildIndex = rightChildIndex;
      }

      const childrenAreOutOfBounds = leftChildIndex >= this.size();
      const elementIsLessThanChildren = this.less(k, smallestChildIndex);
      if (childrenAreOutOfBounds || elementIsLessThanChildren) break;

      this.swap(k, smallestChildIndex);

      k = smallestChildIndex;
    }
  }

  private swim(k: number): void {
    let parentIndex = this.getParentIndex(k);

    while (k > 0 && this.less(k, parentIndex)) {
      this.swap(k, parentIndex);

      k = parentIndex;
      parentIndex = this.getParentIndex(k);
    }
  }

  private removeAt(indexToRemove: number): T {
    const removedValue = this.heap[indexToRemove];

    const indexOfLastElement = this.size() - 1;
    this.swap(indexToRemove, indexOfLastElement);

    this.heap.pop();

    if (indexToRemove === indexOfLastElement) return removedValue;

    const indexToBeHeapified = indexToRemove;
    const elementToBeHeapified = this.heap[indexToBeHeapified];
    this.sink(indexToBeHeapified);

    if (
      this.compare(this.heap[indexToBeHeapified], elementToBeHeapified) === 0
    ) {
      this.swim(indexToBeHeapified);
    }

    return removedValue;
  }

  private swap(a: number, b: number) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private getLeftChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 2;
  }

  private less(a: number, b: number): boolean {
    return this.compare(this.heap[a], this.heap[b]) < 0;
  }
}

export class MinHeap<T extends number> extends Heap<T> {
  protected compare(a: T, b: T): number {
    return a - b;
  }
}

export class MaxHeap<T extends number> extends Heap<T> {
  protected compare(a: T, b: T): number {
    return b - a;
  }
}
