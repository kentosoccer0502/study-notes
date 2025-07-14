function divideBy3Count(n: number): number {
  let count = 0;
  while (n / 3 >= 1) {
    count++;
    n = n / 3;
  }
  return count;
}
