function hammingDistanceInString(string1: string, string2: string): number {
  let count = 0;
  for (let i = 0, j = 0; i < string1.length, j < string2.length; i++, j++) {
    if (string1[i] != string2[j]) {
      count++;
    }
  }
  return count;
}
