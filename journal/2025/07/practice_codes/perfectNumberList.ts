function perfectNumberList(n: number): string {
  let i = 2;
  let answer = "";
  while (i <= n) {
    let sum = 0;
    for (let j = 1; j <= i - 1; j++) {
      if (i % j === 0) {
        sum += j;
      }
    }
    if (sum !== i) {
      i++;
      continue;
    }
    answer += `${i}-`;
    i++;
  }
  if (!answer) return "none";
  return answer.slice(0, -1);
}

/**
 * 完全数とは
 * → 自分自身以外の約数を全て足した値が自分自身に等しい自然数
 *
 * ロジック
 * - 2〜nまで一つずつ処理
 *   - 約数を洗い出して全て足す
 *   - 自分自身と等しい場合returnする
 */
