function decimalToBinary(decNumber: number): string {
  let answer = "";
  while (decNumber / 2 > 0) {
    let divideByTwo = Math.floor(decNumber / 2);
    let divideByTwoRemain = decNumber % 2;
    decNumber = divideByTwo;
    answer += divideByTwoRemain.toLocaleString();
  }
  return answer.split("").reverse().join("");
}

/**
 * 26
 * 26 / 2 = 13 ... 0
 * 13 / 2 = 6 ... 1
 * 6 / 2 = 3 ... 0
 * 3 / 2 = 1 ... 1
 * 1 / 2 = 0 ... 1
 */
