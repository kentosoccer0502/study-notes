function countDivisibleByK(n: number, k: number): number {
  let count: number = 0;
  if (n % k !== 0) return count;
  let divisibleByK = n / k;
  count += 1;
  return count + countDivisibleByK(divisibleByK, k);
}

// C(28,2)
// -> C(14,2)
// -> C(7,2)
