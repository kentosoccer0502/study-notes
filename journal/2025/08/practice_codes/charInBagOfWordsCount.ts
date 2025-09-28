function charInBagOfWordsCount(
  bagOfWords: string[],
  keyCharacter: string
): number {
  let countWords = 0;
  for (let i = 0; i < bagOfWords.length; i++) {
    for (let j = 0; j < bagOfWords[i].length; j++) {
      if (keyCharacter === bagOfWords[i][j]) {
        countWords += 1;
      }
    }
  }
  return countWords;
}
