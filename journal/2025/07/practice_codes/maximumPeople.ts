function maximumPeople(x: number, y: number): number {
  if (x % y == 0) return y;
  return maximumPeople(y, x % y);
}
