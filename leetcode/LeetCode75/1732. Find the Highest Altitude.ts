// https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75
function largestAltitudeOn(gain: number[]): number {
  let altitudes: number[] = [0];
  for (let i = 1; i <= gain.length; i++) {
    altitudes[i] = altitudes[i - 1] + gain[i - 1];
  }
  return Math.max(...altitudes);
}

function largestAltitudeO1(gain: number[]): number {
  let answer = 0;
  let current = 0;
  for (let i = 0; i < gain.length; i++) {
    current += gain[i];
    answer = Math.max(answer, current);
  }
  return answer;
}
