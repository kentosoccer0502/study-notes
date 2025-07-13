function interestsPaid(initialLoan: number, didPayOnTime: boolean): number {
  const chip = 2.5;
  return didPayOnTime ? initialLoan * 1.02 + chip : initialLoan * 1.15 + chip;
}
