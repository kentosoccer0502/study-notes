function notDivisibleNumbers(x: number, y: number): string {
  let index = 2;
  let answer = "1";
  while (index <= x) {
    if (index % y === 0) {
      index++;
      continue;
    }
    answer += "-" + index;
    index++;
  }
  return answer;
}
