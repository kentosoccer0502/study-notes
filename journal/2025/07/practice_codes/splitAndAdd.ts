function splitAndAdd(digits: number): number {
  if (digits < 10) return digits;
  return splitAndAdd(Math.floor(digits / 10)) + (digits % 10);
}

// A(123)
// -> A(12) + 3
// -> A(floor(123/10)) + 123 % 10
