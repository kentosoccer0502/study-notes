function caesarCipher(message: string, n: number): string {
  const cleanedMessage = message.replace(/ /g, "");
  const messageLength = cleanedMessage.length;
  let index = 0;
  let cipher = "";
  while (index < messageLength) {
    let charCode = cleanedMessage.charCodeAt(index);
    if (charCode + n >= 122) {
      cipher += String.fromCharCode(((charCode + n - 97) % 26) + 97);
      index++;
      continue;
    }
    cipher += String.fromCharCode(charCode + n);
    index++;
  }
  return cipher;
}
