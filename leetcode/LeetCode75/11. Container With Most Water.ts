// https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let answer = 0;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    if (answer < area) answer = area;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return answer;
}
