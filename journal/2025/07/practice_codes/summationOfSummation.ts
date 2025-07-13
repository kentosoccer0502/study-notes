function summationOfSummation(n: number): number {
  let finalTotal = 0;
  for (let i = 1; i <= n; i++) {
    let summarationOfI = 0;
    for (let j = 1; j <= i; j++) {
      summarationOfI += j;
    }
    finalTotal += summarationOfI;
  }
  return finalTotal;
}

// s(2)
// 1
// 1 + 2 => 3
// -> 4

//s(3)
// 1
// 1 + 2 => 3
// 1 + 2 + 3 => 6
// 10
