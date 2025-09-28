function countCharactersAfterN(arr: string[]): number {
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    let countAfterN: number = [...arr[i]].filter(
      (j) => "n" <= j && j <= "z"
    ).length;
    count += countAfterN;
    countAfterN = 0;
  }
  return count;
}

/**
 * 1. 各配列の中でnを含む以降の文字をカウント
 * 2. 1.の合計値を出す
 */
