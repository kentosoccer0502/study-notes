// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/?envType=study-plan-v2&envId=leetcode-75
function longestSubarray(nums: number[]): number {
  let left = 0;
  let answer = 0;
  let zeros = 0;
  const canDelete = 1;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    while (zeros > canDelete) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    answer = Math.max(answer, right - left);
  }
  return answer;
}
