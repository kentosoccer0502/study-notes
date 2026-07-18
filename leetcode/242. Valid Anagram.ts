// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=programming-skills

import { count } from 'node:console';

// 最初考えたアルゴリズム -> 同じ合計値になることがあるので、正しい判定ができない
// function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) return false;
//   // charcodeの合計値が一緒か判定する
//   if (calcCharCodeSum(s) !== calcCharCodeSum(t)) return false;
//   return true;
// }

// function calcCharCodeSum(str: string): number {
//   let charCodeSum = 0;
//   for (let i = 0; i < str.length; i++) {
//     charCodeSum += str.charCodeAt(i);
//   }
//   return charCodeSum;
// }

// Mapを使ったアルゴリズム
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const countStrMap = new Map<string, number>();

  for (const char of s) {
    countStrMap.set(char, (countStrMap.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const current = countStrMap.get(char);
    if (!current) return false;
    countStrMap.set(char, current - 1);
  }
  return true;
}
