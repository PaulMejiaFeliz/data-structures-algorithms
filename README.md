# data-structures-algorithms

## Big Os

- **O(1)** _Constant_ - no loops
- **O(log N)** _Logarithmic_ - usually searching algorithms have log n if they are sorted (Binary Search)
- **O(n)** _Linear_ - for loops, while loops through n items
- **O(n log(n))** _Log Liniear_ - usually sorting operations
- **O(n^2)** _Quadratic_ - every element in a collection needs to be compared to ever other element. Two nested loops
- **O(2^n)** _Exponential_ - recursive algorithms that solves a problem of size N
- **O(n!)** _Factorial_ - you are adding a loop for every element

**Notes**

- Iterating through half a collection is still O(n)
- Two separate collections: O(a \* b)

### What can cause time in a function?

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

### Rules

1. Worst case scenario
1. Drop the constants

   **\+** for steps in order

   **\*** for nested steps

```
O(1 + n/2 + 100)
O(n/2 + 101)
O(n/2)
O(n)
```

1. Different variables for each inputs

```ts
function compressBoxesTwice(boxes: number[], boxes2: number[]) {
  boxes.forEach((box) => console.log(box));
  boxes2.forEach((box) => console.log(box));
}

// O(a + b)
```

1. Drop non-dominant terms

```
O(n + n^2)
O(n^2)
```

### What causes Space complexity?

- Variables
- Data Structures
- Function Call
- Allocations
