// https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75
function longestOnes(nums: number[], k: number): number {
  let count = 0;
  let zeros = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeros++;
    if (zeros === k) {
      count = i + 1;
      zeros = 0;
    }
  }
}
