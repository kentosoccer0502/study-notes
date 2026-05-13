function swapCase(charList: string[]): string[] {
  return charList.map((i) => {
    return i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
  });
}

function swapCaseV2(charList: string[]): string[] {
  let answer: string[] = [];
  charList.map((i) => {
    if (i === i.toUpperCase()) {
      answer.push(i.toLowerCase());
    } else {
      answer.push(i.toUpperCase());
    }
  });
  return answer;
}
