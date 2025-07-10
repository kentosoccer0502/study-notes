function howLongToReachFundGoal(
  capitalMoney: number,
  goalMoney: number,
  interest: number
): number {
  return howLongToReachFundGoalHelper(capitalMoney, goalMoney, interest);
}

function howLongToReachFundGoalHelper(
  capitalMoney: number,
  goalMoney: number,
  interest: number,
  year: number = 0
): number {
  if (capitalMoney >= goalMoney) return year;
  if (year >= 80) return 80;

  const landRate = year % 2 === 0 ? 1.02 : 1.03;
  const nextGoal = goalMoney * landRate;
  const nextCapital = capitalMoney * (1 + interest / 100);

  return howLongToReachFundGoalHelper(
    nextCapital,
    nextGoal,
    interest,
    year + 1
  );
}
