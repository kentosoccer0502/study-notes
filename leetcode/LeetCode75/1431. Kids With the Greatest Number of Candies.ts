// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let answer = [];
  const maxCandies = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    let sum = candies[i]! + extraCandies;
    sum >= maxCandies ? answer.push(true) : answer.push(false);
  }
  return answer;
}
// -----------------
function kidsWithCandiesV2(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= maxCandies);
}
