```typescript
function howLongToReachFundGoal(
  capitalMoney: number,
  goalMoney: number,
  interest: number,
  year: number = 0
): number {
  if (year >= 80) return 80;
  if (capitalMoney >= goalMoney) return year;

  const rate = interest / 100;
  const landInflation = year % 2 === 0 ? 1.02 : 1.03;

  const nextCapital = capitalMoney * (1 + rate);
  const nextGoal = goalMoney * landInflation;

  return howLongToReachFundGoal(nextCapital, nextGoal, interest, year + 1);
}
```
