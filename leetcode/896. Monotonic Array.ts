// https://leetcode.com/problems/monotonic-array/description/?envType=study-plan-v2&envId=programming-skills
function isMonotonic(nums: number[]): boolean {
  if (nums.length < 1) throw Error;
  if (nums[0]! < nums[1]!) {
    return monotonicHelper(nums, 1, true);
  } else if (nums[0]! > nums[1]!) {
    return monotonicHelper(nums, 1, false);
  } else if (nums[0]! === nums[1]!) {
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i]! < nums[i + 1]!) return monotonicHelper(nums, i, true);
      if (nums[i]! > nums[i + 1]!) return monotonicHelper(nums, i, false);
      continue;
    }
  }

  return true;
}

function monotonicHelper(nums: number[], startIndex: number, isIncreasing: boolean): boolean {
  if (isIncreasing) {
    for (let i = startIndex; i < nums.length - 1; i++) {
      if (!(nums[i]! <= nums[i + 1]!)) return false;
      continue;
    }
  } else {
    for (let i = 1; i < nums.length - 1; i++) {
      if (!(nums[i]! >= nums[i + 1]!)) return false;
      continue;
    }
  }
  return true;
}

// 別解
// function isMonotonic(nums: number[]): boolean {
//     let increasing = true
//     let decreasing = true

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]! < nums[i + 1]!) decreasing = false
//         if (nums[i]! > nums[i + 1]!) increasing = false
//         continue
//     }
//     return increasing || decreasing
// };

// 別解2
// function isMonotonic(nums: number[]): boolean {
//     let increasing = true
//     let decreasing = true

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]! < nums[i + 1]!) decreasing = false
//         if (nums[i]! > nums[i + 1]!) increasing = false
//         if (!increasing && !decreasing) return false ----------> 早期終了コードを追加
//         continue
//     }
//     return true
// };
