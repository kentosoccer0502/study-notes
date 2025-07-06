function swapPosition(s: string): string {
  if (s.length <= 1) {
    return s;
  }
  let evenPostion = 1;
  let oddPosition = 0;
  return s[evenPostion] + s[oddPosition] + swapPosition(s.slice(2));
}
