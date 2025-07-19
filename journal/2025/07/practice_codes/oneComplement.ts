function oneComplement(bits: string): string {
  let bitsComplement = "";
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === "1") bitsComplement += "0";
    if (bits[i] === "0") bitsComplement += "1";
  }
  return bitsComplement;
}
