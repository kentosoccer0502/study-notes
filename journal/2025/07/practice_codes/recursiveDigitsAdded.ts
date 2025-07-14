function recursiveDigitsAdded(digits: number): number {
  let finalSum = 0;
  let currentSum = spllitAndAddDigits(digits);

  while (currentSum !== 0) {
    if (currentSum < 10) return currentSum + finalSum;
    finalSum += currentSum;
    currentSum = spllitAndAddDigits(currentSum);
  }

  return finalSum;
}

function spllitAndAddDigits(digits: number): number {
  let sum = 0;
  while (digits !== 0) {
    sum += digits % 10;
    digits = Math.floor(digits / 10);
  }
  return sum;
}
