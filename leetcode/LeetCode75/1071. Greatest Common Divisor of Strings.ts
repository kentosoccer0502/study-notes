// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
function gcdOfStrings(str1: string, str2: string): string {
  const length = gcd(str1.length, str2.length);
  const candidate = str1.slice(0, length);
  const countStr1 = str1.length / length;
  const countStr2 = str2.length / length;
  if (str1 !== candidate.repeat(countStr1) || str2 !== candidate.repeat(countStr2)) return '';
  return candidate;
}

// 最大公約数をユークリッド互除法で求める
function gcd(a: number, b: number): number {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// 別解 -----------------------
function gcdOfStringsV2(str1: string, str2: string): string {
  const repeatLength = gcd(str1.length, str2.length);
  if (str1 + str2 === str2 + str1) return str1.slice(0, repeatLength);
  return '';
}

const gcdV2 = (a: number, b: number) => {
  return a % b === 0 ? b : gcd(b, a % b);
};
