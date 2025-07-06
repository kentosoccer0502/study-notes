function recursiveAddition(m: number, n: number): number {
  if (n <= 0) {
    return m;
  }
  return recursiveAddition(m, 0) + n;
}

// A(8,3) = A(8,2) + 1
//        = A(8,1) + 1 + 1
//        = A(8,0) + 1 + 1 + 1
// A(8,2) = A(8,1) + 1
// A(8,1) = A(8,0) + 1
