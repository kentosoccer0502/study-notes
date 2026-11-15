// https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75
function maxOperations(nums: number[], k: number): number {
  // 時間計算量: O(nlogn)
  nums.sort((a, b) => a - b);
  let output = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let pairValue = k - nums[left];
    if (pairValue === nums[right]) {
      output++;
      left++;
      right--;
    } else if (pairValue > nums[right]) {
      left++;
    } else {
      right--;
    }
  }
  return output;
}

function maxOperationsOn(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let output = 0;

  for (const num of nums) {
    const pairValue = k - num;
    if ((map.get(pairValue) ?? 0) > 0) {
      output++;
      map.set(pairValue, map.get(pairValue)! - 1);
    } else {
      map.set(num, (map.get(num) ?? 0) + 1);
    }
  }
  return output;
}

function maxOperationsOn2(nums: number[], k: number): number {
  let output = 0;
  let i = 0;
  while (i < nums.length) {
    let pairValue = k - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (pairValue === nums[j]) {
        output++;
        // pairの要素をnumsから排除
        // ただnumsから要素を削除するのでiをうまく調整する必要あり
        // またO(n^2）の時間計算量なのでこの解法は望ましくない
        nums.splice(j, 1);
        nums.splice(i, 1);
        i--;
        break;
      }
    }
    i++;
  }
  return output;
}
