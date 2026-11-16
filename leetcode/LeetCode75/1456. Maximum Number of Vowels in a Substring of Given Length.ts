// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75
function maxVowels(s: string, k: number): number {
  const vowels = 'aeiou';
  let answer = 0;
  let count = 0;
  let left = 0;
  let right = k;
  while (right <= s.length) {
    while (left < right) {
      if (vowels.includes(s[left])) {
        count++;
      }
      left++;
    }
    answer = Math.max(answer, count);
    count = 0;
    right++;
    left -= k - 1;
  }
  return answer;
}

function maxVowelsV2(s: string, k: number): number {
  const vowels = 'aeiou';
  let left = 0;
  let right = 0;
  let count = 0;
  while (right < k) {
    if (vowels.includes(s[right])) {
      count++;
    }
    right++;
  }
  let answer = count;
  if (answer === k) return answer;
  while (right < s.length) {
    if (vowels.includes(s[left])) count--;
    if (vowels.includes(s[right])) count++;
    answer = Math.max(answer, count);
    if (answer === k) return answer;
    left++;
    right++;
  }
  return answer;
}
