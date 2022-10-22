class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private heapify(): void {
    let i = Math.max(0, Math.floor(this.size() / 2) - 1);
    for (; i >= 0; i--) {
      this.sink(i);
    }
  }

  private size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  add(element: number): void {
    this.heap.push(element);
    this.swim(this.size() - 1);
  }

  peek(): number | null {
    if (this.isEmpty()) return null;

    return this.heap[0];
  }

  contains(element: number): boolean {
    return this.heap.includes(element);
  }

  poll(): number | null {
    if (this.isEmpty()) return null;

    return this.removeAt(0);
  }

  remove(element: number): boolean {
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

  private removeAt(indexToRemove: number): number {
    const removedValue = this.heap[indexToRemove];

    const indexOfLastElement = this.size() - 1;
    this.swap(indexToRemove, indexOfLastElement);

    this.heap.pop();

    if (indexToRemove === indexOfLastElement) return removedValue;

    const indexToBeHeapified = indexToRemove;
    const elementToBeHeapified = this.heap[indexToBeHeapified];
    this.sink(indexToBeHeapified);

    if (this.heap[indexToBeHeapified] === elementToBeHeapified) {
      this.swim(indexToBeHeapified);
    }

    return removedValue;
  }

  private swap(i: number, j: number) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
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

  private less(i: number, j: number): boolean {
    return this.heap[i] < this.heap[j];
  }
}
