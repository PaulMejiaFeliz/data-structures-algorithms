// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logPairs(boxes: number[]) {
  for (let i = 0; i < boxes.length - 1; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      console.log(`[${boxes[i]} - ${boxes[j]}]`);
    }
  }
}

logPairs(boxes);

// O(n * n) --> O(n^2)

export {};
