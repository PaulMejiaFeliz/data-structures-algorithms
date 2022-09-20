function maxSubArray(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let maxSum = nums[nums.length - 1];

  for (let i = 0; i < nums.length - 1; i++) {
    let sum = nums[i];

    if (sum > maxSum) {
      maxSum = sum;
    }

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}

function maxSubArrayV2(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let sum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }

    sum += nums[i];

    if (sum >= maxSum) {
      maxSum = sum;
    }
  }

  console.log('Sum: ', sum);
  console.log('Max Sum: ', maxSum);

  return maxSum;
}

const array = [-1, 0, -2];
const array2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const array3 = [-2, -1, -2];
const array4 = [
  9, 0, -2, -2, -3, -4, 0, 1, -4, 5, -8, 7, -3, 7, -6, -4, -7, -8,
];

console.log(maxSubArrayV2(array4));
