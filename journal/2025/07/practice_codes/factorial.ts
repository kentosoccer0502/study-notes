function factorial(n: number): number {
  let answer = 1;
  for (let i = 1; i < n + 1; i++) {
    answer *= i;
  }
  return answer;
}
