function lenString(string: string): number {
  if (string === "") {
    return 0;
  }
  return lenString(string.slice(0, -1)) + 1;
}
