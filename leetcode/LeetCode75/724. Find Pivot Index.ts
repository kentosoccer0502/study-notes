// https://leetcode.com/problems/find-pivot-index/?envType=study-plan-v2&envId=leetcode-75
function pivotIndex(nums: number[]): number {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    if (rightSum === leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
}
