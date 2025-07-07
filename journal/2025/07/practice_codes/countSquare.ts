function countSquare(x: number, y: number): number {
  const squareSize = countSquareHelper(x, y);
  return ((x / squareSize) * y) / squareSize;
}

function countSquareHelper(x: number, y: number): number {
  if (x % y == 0) return y;
  return countSquareHelper(y, x % y);
}
