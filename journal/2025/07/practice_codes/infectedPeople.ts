function infectedPeople(day: number): number {
  if (day <= 0) {
    return 1;
  }
  return infectedPeople(day - 1) * 2;
}

// P(2) = P(3) * 2
