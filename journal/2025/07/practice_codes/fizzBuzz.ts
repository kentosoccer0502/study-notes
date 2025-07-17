function fizzBuzz(n: number): string {
  let answer = "1";
  for (let i = 2; i <= n; i++) {
    if (i % 15 === 0) {
      answer += "-" + "FizzBuzz";
    } else if (i % 5 === 0) {
      answer += "-" + "Buzz";
    } else if (i % 3 === 0) {
      answer += "-" + "Fizz";
    } else {
      answer += "-" + i;
    }
  }
  return answer;
}
