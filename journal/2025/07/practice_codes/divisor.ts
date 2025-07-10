function divisor(number: number): string {
  return divisorHelper(number);
}

function divisorHelper(number: number, divisor: number = number): string {
  if (divisor == 1) {
    return "1";
  } else if (number % divisor == 0) {
    return divisorHelper(number, divisor - 1) + "-" + `${divisor}`;
  }
  return divisorHelper(number, divisor - 1);
}
