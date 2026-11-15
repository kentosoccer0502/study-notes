// https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75
function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  let left = 0;
  let right = 0;
  while (right < k) {
    sum += nums[right];
    right++;
  }
  let maxSum = sum;
  while (right < nums.length) {
    sum = sum - nums[left] + nums[right];
    if (sum > maxSum) {
      maxSum = sum;
    }
    left++;
    right++;
  }
  return maxSum / k;
}
