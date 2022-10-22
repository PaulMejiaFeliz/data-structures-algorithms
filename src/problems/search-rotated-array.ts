function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.ceil((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[left] <= nums[middle]) {
      if (nums[middle] > target && nums[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (nums[middle] < target && nums[right] >= target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
}

console.log(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 25));
