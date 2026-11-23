// https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75
function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let zeros = 0;
  let answer = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    while (zeros > k) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
