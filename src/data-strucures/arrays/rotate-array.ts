import { array } from './big-array';

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (k > nums.length) {
    k %= nums.length;
  }

  const newNums: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    newNums[(i + k) % nums.length] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = newNums[i];
  }
}

function rotateV2(nums: number[], k: number): void {
  if (k > nums.length) {
    k %= nums.length;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(array: number[], start: number, end: number) {
    while (start < end) {
      const temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--;
    }
  }
}

const bigArray = [...array];
rotate(bigArray, 54944);
console.log(bigArray);

const bigArray2 = [...array];
rotateV2(bigArray2, 54944);
console.log(bigArray2);

export {};
