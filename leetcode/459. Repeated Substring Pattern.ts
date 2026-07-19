// https://leetcode.com/problems/repeated-substring-pattern/description/?envType=study-plan-v2&envId=programming-skills

function repeatedSubstringPattern(s: string): boolean {
  for (let i = 1; i <= s.length / 2; i++) {
    if (s.length % i !== 0) continue;
    const pattern = s.slice(0, i);
    if (pattern.repeat(s.length / pattern.length) === s) return true;
  }
  return false;
}
