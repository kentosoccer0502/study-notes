// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
function mergeAlternately(word1: string, word2: string): string {
  let answer: string = '';
  let i = 0;
  let j = 0;
  while (i < word1.length && j < word2.length) {
    answer += word1[i]! + word2[j]!;
    i++;
    j++;
  }
  if (word1.length < word2.length) {
    while (j < word2.length) {
      answer += word2[j]!;
      j++;
    }
  } else {
    while (i < word1.length) {
      answer += word1[i]!;
      i++;
    }
  }
  return answer;
}

// ----------------------------
function mergeAlternately_v2(word1: string, word2: string): string {
  let answer: string = '';
  let i = 0;
  let j = 0;
  while (i < word1.length || j < word2.length) {
    if (i >= word1.length) {
      answer += word2[j];
      j++;
    } else if (j >= word2.length) {
      answer += word1[i];
      i++;
    } else {
      answer += word1[i]! + word2[j]!;
      i++;
      j++;
    }
  }
  return answer;
}

// ----------------------------
function mergeAlternately_v3(word1: string, word2: string): string {
  let answer: string = '';
  let i = 0;
  const biggerLength = word1.length < word2.length ? word2.length : word1.length;

  while (i < biggerLength) {
    if (i >= word1.length) {
      answer += word2[i];
      i++;
    } else if (i >= word2.length) {
      answer += word1[i];
      i++;
    } else {
      answer += word1[i]! + word2[i]!;
      i++;
    }
  }

  return answer;
}
// ----------------------------
function mergeAlternately_v4(word1: string, word2: string): string {
  let answer: string = '';
  let i = 0;
  const biggerLength = Math.max(word1.length, word2.length);

  while (i < biggerLength) {
    if (i < word1.length) {
      answer += word1[i];
    }
    if (i < word2.length) {
      answer += word2[i];
    }
    i++;
  }
  return answer;
}
