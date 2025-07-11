function recursiveDigitsAdded(digits) {
  // 各桁の合計を求める関数（ヘルパー）
  function sumDigits(n) {
    return n
      .toString()
      .split("")
      .reduce((sum, d) => sum + Number(d), 0);
  }

  // 再帰処理
  function helper(n, total) {
    if (n < 10) return total;
    const sum = sumDigits(n);
    return helper(sum, total + sum);
  }
  if (digits < 10) return digits;
  return helper(digits, 0);
}
