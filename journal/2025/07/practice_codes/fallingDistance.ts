function fallingDistance(planet: string, time: number): number {
  return Math.floor(meterToMile((1 / 2) * planetGravity(planet) * time ** 2));
}

function planetGravity(planet: string): number {
  if (planet === "Earth") {
    return 9.8;
  } else if (planet === "Jupiter") {
    return 24.79;
  } else if (planet === "Mercury") {
    return 3.7;
  } else {
    return 0;
  }
}

function meterToMile(meter: number): number {
  return meter * 0.000621371;
}
