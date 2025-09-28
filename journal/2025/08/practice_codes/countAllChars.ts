function countAllChars(arr: string[]): number {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].length;
  }
  return count;
}
