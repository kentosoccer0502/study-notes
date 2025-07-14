function splitAndAdd(digits: number): number {
  let sum = 0;
  while (digits !== 0) {
    sum += digits % 10;
    digits = Math.floor(digits / 10);
  }
  return sum;
}
