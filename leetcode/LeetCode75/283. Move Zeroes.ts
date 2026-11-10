// https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let read = 0;
  let write = 0;
  while (read < nums.length) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
    read++;
  }
  while (write < nums.length) {
    nums[write] = 0;
    write++;
  }
}

function moveZeroesV2(nums: number[]): void {
  let read = 0;
  let write = 0;
  while (read < nums.length) {
    if (nums[read] !== 0) {
      if (read !== write) nums[write] = nums[read];
      write++;
    }
    read++;
  }
  while (write < nums.length) {
    nums[write] = 0;
    write++;
  }
}
