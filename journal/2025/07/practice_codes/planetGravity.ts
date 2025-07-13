function fallingDistance(planet: string, time: number): number {
  return Math.floor(meterToMile((1 / 2) * planetGravity(planet) * time ** 2));
}

function planetGravity(planet: string): number {
  let gravity = 0;
  switch (planet) {
    case "Earth":
      gravity = 9.8;
      break;
    case "Jupiter":
      gravity = 24.79;
      break;
    case "Mercury":
      gravity = 3.7;
      break;
    default:
  }
  return gravity;
}

function meterToMile(meter: number): number {
  return meter * 0.000621371;
}
