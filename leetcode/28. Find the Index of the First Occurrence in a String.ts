// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=programming-skills

function strStr(haystack: string, needle: string): number {
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    const match = isPart(haystack, needle, i);
    if (!match) continue;
    return i;
  }
  return -1;
}

function isPart(haystack: string, needle: string, start: number): boolean {
  for (let i = start; i < start + needle.length; i++) {
    if (haystack[i] !== needle[i - start]) return false;
  }
  return true;
}

// 別解
// function strStr(haystack: string, needle: string): number {
//     for (let i = 0; i < haystack.length - needle.length + 1; i++) {
//         if (haystack.slice(i, i + needle.length) === needle) return i
//     }

//     return -1
// };
