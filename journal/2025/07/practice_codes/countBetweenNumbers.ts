function countBetweenNumbers(
  digit: number,
  idStart: number,
  idEnd: number
): number {
  let digitCount = 0;
  for (let i = idStart; i <= idEnd; i++) {
    for (let j = 0; j <= countDivideByTen(i); j++) {
      const numStr = i.toString();
      if (numStr[j] == digit.toString()) digitCount++;
    }
  }
  return digitCount;
}

function countDivideByTen(digit: number, count: number = 0): number {
  if (digit < 10) return count;
  return countDivideByTen(digit / 10, count + 1);
}
