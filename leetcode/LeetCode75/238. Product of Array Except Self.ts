// https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75
function productExceptSelf(nums: number[]): number[] {
  /**
    時間計算量：O(n) ✅
        処理	計算量
        getLeftProducts()	O(n)
        getRightProducts()	O(n)
        最後のforループ	O(n)
        合計	O(3n) → O(n)

    空間計算量：O(n) ✅
        leftProducts、`rightProducts`、`answer` の3つの配列を使用している。
        それぞれのサイズが n なので、全体で O(3n) → O(n)。
 */
  let answer: number[] = [];
  const leftProducts = getLeftProducts(nums);
  const rightProducts = getRightProducts(nums);
  for (let i = 0; i < nums.length; i++) {
    answer.push(leftProducts[i] * rightProducts[i]);
  }
  return answer;
}

function getLeftProducts(nums: number[]): number[] {
  let answer: number[] = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }
  return answer;
}

function getRightProducts(nums: number[]): number[] {
  let answer = Array(nums.length).fill(1);
  for (let i = nums.length - 2; i >= 0; i--) {
    answer[i] = answer[i + 1] * nums[i + 1];
  }
  return answer;
}

// ---
function productExceptSelV2(nums: number[]): number[] {
  let answer: number[] = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return answer;
}
