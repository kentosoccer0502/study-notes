function compareLength(s1: string, s2: string): boolean {
  return s1.length >= s2.length;
}

function compareAsciiTotal(s1: string, s2: string): boolean {
  return calcSumAscii(s1) >= calcSumAscii(s2);
}

function calcSumAscii(s: string): number {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += s.charCodeAt(i);
  }
  return sum;
}

function maxByCriteria(fn: (s1: string, s2: string) => boolean, arr: string[]): string {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], max)) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxByCriteria(compareLength, ['apple', 'yumberry', 'grape', 'banana', 'mandarin']));
console.log(maxByCriteria(compareLength, ['zoomzoom', 'choochoo', 'beepbeep', 'ahhhahhh']));
console.log(maxByCriteria(compareAsciiTotal, ['apple', 'yumberry', 'grape', 'banana', 'mandarin']));
console.log(maxByCriteria(compareAsciiTotal, ['zoom', 'choochoo', 'beepbeep', 'ahhhahhh']));
