// https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (first >= nums[i]) {
      first = nums[i];
    } else if (second > nums[i]) {
      second = nums[i];
    }
    if (second < nums[i]) return true;
  }
  return false;
}

// https://leetcode.com/problems/longest-increasing-subsequence/description/
// 300. Longest Increasing Subsequence
function lengthOfLIS(nums: number[]): number {
  let tails: number[] = []; // 各長さの増加部分列について、末尾の最小値を保持する配列
  for (const num of nums) {
    let left = 0;
    let right = tails.length;
    // 二分探索で更新位置を探す
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === tails.length) {
      tails.push(num);
    } else {
      tails[left] = num;
    }
  }
  return tails.length;
}
