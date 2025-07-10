function recursiveIsPalindrome(s: string): boolean {
  return recursiveIsPalindromeHelper(s.toLowerCase().replace(/ /g, ""));
}

function recursiveIsPalindromeHelper(s: string, index: number = 1): boolean {
  const stringLength: number = s.length;
  if (s[index - 1] !== s[stringLength - index]) return false;
  if (stringLength - index < 0) return true;

  return recursiveIsPalindromeHelper(s, index + 1);
}
