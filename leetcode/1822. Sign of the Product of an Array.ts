// https://leetcode.com/problems/sign-of-the-product-of-an-array/description/?envType=study-plan-v2&envId=programming-skills

function arraySign(nums: number[]): number {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    product *= nums[i]!;
  }
  if (product > 0) return 1;
  return -1;
}

// 別解) 負の数を数える。計算量は上記と同じだが数が多くなるとproductが巨大になりオーバーフローのケースがありうるのでこっちの方がいいかも
// function arraySign(nums: number[]): number {
//   let negativeCount = 0;

//   for (const num of nums) {
//     if (num === 0) return 0;
//     if (num < 0) negativeCount++;
//   }

//   return negativeCount % 2 === 0 ? 1 : -1;
// }
