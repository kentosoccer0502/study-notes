// https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
function compress(chars: string[]): number {
  let read = 0;
  let write = 0;
  let count = 0;
  while (read < chars.length) {
    let char = chars[read];
    while (char === chars[read]) {
      count++;
      read++;
    }
    chars[write] = chars[read - 1];
    write++;
    if (count > 1) {
      for (const digit of String(count)) {
        chars[write] = digit;
        write++;
      }
    }
    count = 0;
  }
  return write;
}
