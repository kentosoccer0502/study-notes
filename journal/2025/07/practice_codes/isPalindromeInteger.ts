function isPalindromeInteger(n: number): boolean {
  const idToString = n.toString();
  const idLength = idToString.length;
  for (let i = 0; i <= idLength / 2; i++) {
    if (idToString[i] !== idToString[idLength - i - 1]) return false;
  }
  return true;
}
