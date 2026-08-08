// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/?envType=study-plan-v2&envId=programming-skills
function canMakeArithmeticProgression(arr: number[]): boolean {
  if (arr.length < 2) return false;
  arr.sort((a, b) => a - b);
  const diff = arr[1]! - arr[0]!;
  for (let i = 2; i < arr.length; i++) {
    let compareDiff = arr[i]! - arr[i - 1]!;
    if (diff !== compareDiff) return false;
  }
  return true;
}

// 時間計算量的にsortをしているのでO(nlogn) * O(n) -> O(nlogn)なので改善できればしたい
