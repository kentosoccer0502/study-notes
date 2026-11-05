// https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
function reverseVowels(s: string): string {
  const vowels = 'aeiou';
  const sArray = s.split('');
  let left = 0;
  let right = sArray.length - 1;

  while (left < right) {
    if (!vowels.includes(sArray[left].toLowerCase())) {
      left++;
      continue;
    }
    if (!vowels.includes(sArray[right].toLowerCase())) {
      right--;
      continue;
    }
    let temp = sArray[left]!;
    sArray[left] = sArray[right];
    sArray[right] = temp;
    left++;
    right--;
  }
  return sArray.join('');
}
