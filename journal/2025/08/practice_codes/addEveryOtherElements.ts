function addEveryOtherElement(intArr: number[]): number {
  let sum = 0;
  for (let i = 1; i < intArr.length + 1; i++) {
    if (i % 2 === 0) continue;
    sum += intArr[i - 1];
  }
  return sum;
}
