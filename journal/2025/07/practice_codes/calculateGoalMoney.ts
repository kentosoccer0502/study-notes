function calculateGoalMoney(capital: number, year: number): number {
  // 元金と年数を元に、複利を使って将来の合計金額を計算する関数
  /* 複利計算の公式 P(1 + i)n を使用します。ここで、P は投資初期金額、i は年利、n は期間
    例えば、元金 300 万円を年利 3% で 20 年間運用すると、
    最終的に得られる金額は 300 × (1 + 0.03)^20 = 5,418,321 円となります。
    */
  const resultGoalMoney =
    capital * (1 + calculateInterestRate(capital)) ** year;
  return roundToInteger(resultGoalMoney);
}

function calculateInterestRate(capital: number): number {
  // 最初の元金の偶数、奇数判別関数
  if (capital % 2 === 0) {
    return 0.02;
  }
  return 0.03;
}

function roundToInteger(resultGoalMoney: number): number {
  // 計算結果の小数点切り捨て関数
  return Math.floor(resultGoalMoney);
}
