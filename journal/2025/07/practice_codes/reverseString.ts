function reverseString(s: string): string {
  const stringLength = s.length;
  if (stringLength <= 1) return s;
  return s[stringLength - 1] + reverseString(s.substring(0, stringLength - 1));
}

// r(abcd) -> dcba
// r(abcd) -> d + r(abc)
//         -> d + c + r(ab)
//         -> d + c + b + r(a)
//         -> d + c + b + a
