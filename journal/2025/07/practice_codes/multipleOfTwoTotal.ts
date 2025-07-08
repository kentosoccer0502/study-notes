function multipleOfTwoTotal(n: number): number {
  if (n == 0) return 0;
  if (n == 1) return 2 * 1;
  return multipleOfTwoTotal(n - 1) + multipleOfTwo(n);
}

function multipleOfTwo(n: number): number {
  if (n == 1) return 2 * 1;
  return multipleOfTwo(n - 1) + 2 * n;
}

// M(3)
// -> M(2) + m(3)
// -> M(1) + m(2) + m(3)
// -> 2 + m(1) + 4 + m(2) + 6
// -> 2 + 2 + 4 + m(1) + 4 + 6
// -> 2 + 2 + 4 + 2 + 4 + 6

// M(2)
// -> M(1) + m(2)
// -> 2 + m(2)
// -> 2 + m(1) + 4
// -> 2 + 2 + 4
