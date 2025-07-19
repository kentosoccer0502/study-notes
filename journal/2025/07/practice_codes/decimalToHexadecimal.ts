function decimalToHexadecimal(decNumber: number): string {
  let answer = "";
  while (decNumber > 0) {
    let divideBy16 = Math.floor(decNumber / 16);
    let remain = decNumber % 16;
    decNumber = divideBy16;
    answer = hexadecimalHelper(remain) + answer;
  }
  return answer;
}

function hexadecimalHelper(number: number): string {
  let hexadecimal = "";
  switch (number) {
    case 10:
      hexadecimal = "A";
      break;
    case 11:
      hexadecimal = "B";
      break;
    case 12:
      hexadecimal = "C";
      break;
    case 13:
      hexadecimal = "D";
      break;
    case 14:
      hexadecimal = "E";
      break;
    case 15:
      hexadecimal = "F";
      break;
    default:
      hexadecimal = `${number}`;
  }
  return hexadecimal;
}
