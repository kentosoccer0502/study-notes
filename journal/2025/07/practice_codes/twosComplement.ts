function twosComplement(bits: string): string {
  let oneComplementValue: Array<string> = oneComplement(bits);
  console.log(oneComplementValue);
  console.log(bits.length);
  for (let i = bits.length - 1; i >= 0; i--) {
    if (oneComplementValue[i] === "0") {
      oneComplementValue[i] = "1";
      return oneComplementValue.join("");
    } else {
      oneComplementValue[i] = "0";
    }
  }
  return oneComplementValue.every((bit) => "1")
    ? "100000000"
    : oneComplementValue.join("");
}

function oneComplement(bits: string): Array<string> {
  return bits.split("").map((bit) => (bit === "1" ? "0" : "1"));
}
