// https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75
function findDifferenceOn2(nums1: number[], nums2: number[]): number[][] {
  let answer: number[][] = [[], []];
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !answer[0].includes(nums1[i])) answer[0].push(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !answer[1].includes(nums2[i])) answer[1].push(nums2[i]);
  }
  return answer;
}

function findDifferenceOn(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set<number>(nums1);
  const set2 = new Set<number>(nums2);
  let answer: number[][] = [[], []];

  for (const num of set1) {
    if (!set2.has(num)) answer[0].push(num);
  }
  for (const num of set2) {
    if (!set1.has(num)) answer[1].push(num);
  }

  return answer;
}
