// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
function reverseWords(s: string): string {
  const words = s.split(' ');
  const filteredWords = words.filter((word) => word !== '');
  return filteredWords.reverse().join(' ');
}

function reverseWordsV2(s: string): string {
  return s.trim().split(/¥s+/).reverse().join(' ');
}

function reverseWordsV3(s: string): string {
  const result: string[] = [];
  let right = s.length - 1;

  while (right >= 0) {
    while (right >= 0 && s[right] === ' ') {
      right--;
    }
    if (right < 0) break;
    let end = right;

    while (right >= 0 && s[right] !== ' ') {
      right--;
    }
    result.push(s.slice(right + 1, end + 1));
  }

  return result.join(' ');
}
