[コード全体](/journal/2025/07/practice_codes/recursiveDigitsAdded.ts)としては ほぼ正解に近く、読みやすく良い構造になっています。
ただし、1 箇所だけロジックの不備があり、最終的な 1 桁の値が合計に加算されないケースがあります。

## ✅ 良い点

- spllitAndAddDigits（タイポ除く）は数字を桁ごとに分解して合計する処理として正しい。

- while ループによる 1 桁化処理も適切。

- 変数名も明確 (finalSum, currentSum)。

## ❌ 改善点（重要）

- ❶ 最後の 1 桁が finalSum に含まれないケース
  - 今のコードでは以下のようなケースで 最後の 1 桁が return の前に finalSum に加算されずにそのまま返るため、仕様を満たしません

```typescript
recursiveDigitsAdded(45622943);
// 4+5+6+2+2+9+4+3 = 35
// 3+5 = 8
// return 8 + 0 = 8 ← ❌（本来は 35 + 8 = 43）
```

finalSum に currentSum を加える処理が currentSum >= 10 のときにしか行われていないためです。

## ✅ 修正案

```typescript
function recursiveDigitsAdded(digits: number): number {
  let finalSum = 0;
  let currentSum = spllitAndAddDigits(digits);

  while (currentSum >= 10) {
    finalSum += currentSum;
    currentSum = spllitAndAddDigits(currentSum);
  }

  finalSum += currentSum; // 最後の1桁の値も合計に加算

  return finalSum;
}
```

## 🔤 タイポ修正（任意）

関数名 spllitAndAddDigits のスペルミス（spllit → split）も直しておくとベターです。

```typescript
function splitAndAddDigits(digits: number): number {
  let sum = 0;
  while (digits !== 0) {
    sum += digits % 10;
    digits = Math.floor(digits / 10);
  }
  return sum;
}
```

## ✅ 最終版（修正済）

```typescript
function recursiveDigitsAdded(digits: number): number {
  let finalSum = 0;
  let currentSum = splitAndAddDigits(digits);

  while (currentSum >= 10) {
    finalSum += currentSum;
    currentSum = splitAndAddDigits(currentSum);
  }

  finalSum += currentSum;
  return finalSum;
}

function splitAndAddDigits(digits: number): number {
  let sum = 0;
  while (digits !== 0) {
    sum += digits % 10;
    digits = Math.floor(digits / 10);
  }
  return sum;
}
```
