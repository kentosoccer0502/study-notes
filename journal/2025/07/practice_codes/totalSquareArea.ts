function totalSquareArea(x: number): number {
  if (x <= 1) {
    return 1;
  }
  return totalSquareArea(x - 1) + squareArea(x);
}

function squareArea(x: number): number {
  return x ** 2 * x;
}
