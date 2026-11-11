// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false;
  if (s.length === 0) return true;
  let sIndex = 0;
  let tIndex = 0;
  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
      tIndex++;
      if (sIndex === s.length) return true;
      continue;
    }
    tIndex++;
  }
  return false;
}

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
// tの前処理
function preprocess(t: string): Map<string, number[]> {
  const positions = new Map<string, number[]>();

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!positions.has(char)) positions.set(char, []);
    positions.get(char)!.push(i);
  }
  return positions;
}
// 二分探索
function upperBound(positions: number[], target: number): number {
  let left = 0;
  let right = positions.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (positions[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
// 部分配列判定
function isSubsequenceFollowUp(s: string, positions: Map<string, number[]>): boolean {
  let previousIndex = -1;

  for (const char of s) {
    const indices = positions.get(char);
    if (!indices) return false;

    const index = upperBound(indices, previousIndex);
    if (index === indices.length) return false;

    previousIndex = indices[index];
  }

  return true;
}
