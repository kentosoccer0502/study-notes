function threeGCD(x: number, y: number, z: number): number {
  return twoGCD(twoGCD(x, y), z);
}

function twoGCD(x: number, y: number): number {
  if (x % y == 0) return y;
  return twoGCD(y, x % y);
}
