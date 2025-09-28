function getMaxIndex(arr: number[]): number {
  let MaxIndex: number = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[MaxIndex]) MaxIndex = i;
  }
  return MaxIndex;
}
