import { MaxHeap, MinHeap } from '../data-structures/trees/heap';

class MedianFinder {
  private low: MaxHeap<number>;
  private high: MinHeap<number>;

  constructor() {
    this.low = new MaxHeap();
    this.high = new MinHeap();
  }

  addNum(num: number): void {
    this.low.add(num);

    if (
      this.low.size() &&
      this.high.size() &&
      (this.low.peek() as number) > (this.high.peek() as number)
    ) {
      this.high.add(this.low.poll() as number);
    }

    if (this.low.size() > this.high.size() + 1) {
      this.high.add(this.low.poll() as number);
    }

    if (this.high.size() > this.low.size() + 1) {
      this.low.add(this.high.poll() as number);
    }
  }

  findMedian(): number {
    if (this.low.size() > this.high.size()) {
      return this.low.peek() as number;
    }

    if (this.high.size() > this.low.size()) {
      return this.high.peek() as number;
    }

    const lowValue = this.low.peek() as number;
    const highValue = this.high.peek() as number;
    return (lowValue + highValue) / 2;
  }
}

const medianFinder = new MedianFinder();

medianFinder.addNum(12);
console.log(medianFinder.findMedian()); // 12.0
medianFinder.addNum(10);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(13);
console.log(medianFinder.findMedian()); // 12.0
medianFinder.addNum(11);
console.log(medianFinder.findMedian()); // 11.5
medianFinder.addNum(5);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(15);
console.log(medianFinder.findMedian()); // 11.5
medianFinder.addNum(1);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(11);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(6);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(17);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(14);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(8);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(17);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(6);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(4);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(16);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(8);
console.log(medianFinder.findMedian()); // 11.0
medianFinder.addNum(10);
console.log(medianFinder.findMedian()); // 10.5
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // 10.0
medianFinder.addNum(12);
console.log(medianFinder.findMedian()); // 10.5
medianFinder.addNum(0);
console.log(medianFinder.findMedian()); // 10.0
