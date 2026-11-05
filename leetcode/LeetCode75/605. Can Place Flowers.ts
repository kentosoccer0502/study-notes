// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // 花を植えられる条件は以下
  // 1. 0が3つ連続している真ん中
  // 2. 両端の隣が0の端
  if (n === 0) return true;

  let count = 0;
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n <= 1) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0) {
      if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        count += 1;
        flowerbed[i] = 1;
      }
    } else if (i === flowerbed.length - 1) {
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
        count += 1;
        flowerbed[i] = 1;
      }
    } else {
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        count += 1;
        flowerbed[i] = 1;
      }
    }
  }

  return count >= n;
}

function canPlaceFlowersV2(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;
  let count = 0;
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n <= 1) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    if ((flowerbed[i - 1] ?? 0) === 0 && flowerbed[i] === 0 && (flowerbed[i + 1] ?? 0) === 0) {
      count += 1;
      flowerbed[i] = 1;
    }
  }

  return count >= n;
}

function canPlaceFlowersV3(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if ((flowerbed[i - 1] ?? 0) === 0 && flowerbed[i] === 0 && (flowerbed[i + 1] ?? 0) === 0) {
      count += 1;
      i++;
      if (count >= n) return true;
    }
  }

  return count >= n;
}

function canPlaceFlowers_false(flowerbed: number[], n: number): boolean {
  // 0の数がn + 2ないとダメっぽい
  // 0が連続されていないとダメ
  // -------> ゼロの数を判定に使うのは正しくなかった
  let zeroCount = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1 && zeroCount < n + 2) {
      zeroCount = 0;
    } else {
      zeroCount += 1;
    }
  }
  return zeroCount >= n + 2;
}
