function fibonacciTotal(n: number): number {
  return fibonacciTotalHelper(n);
}

function fibonacci(n: number): number {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciTotalHelper(n: number, total: number = 0): number {
  if (n <= 0) return total;
  const nTotal = fibonacci(n);
  return fibonacciTotalHelper(n - 1, total + nTotal);
}
