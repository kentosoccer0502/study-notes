function doYouFail(string: string): string {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "A") count++;
    if (count == 3) return "fail";
  }
  return "pass";
}
