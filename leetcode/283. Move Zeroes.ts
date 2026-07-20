/**
 Do not return anything, modify nums in-place instead.
 https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=programming-skills
 */

function moveZeroes(nums: number[]): void {
  let writeIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[writeIndex] = nums[i]!;
      writeIndex++;
    }
  }
  for (let i = writeIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}
