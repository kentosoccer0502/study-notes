function hoursToEmpty(
  velocity: number,
  fuelEconomy: number,
  tankCapacity: number
): number {
  const secondsToEmpty = milesWithoutStop(fuelEconomy, tankCapacity) / velocity;
  return Math.floor(secondsToHour(secondsToEmpty) * 10) / 10;
}

function secondsToHour(x: number): number {
  return x / 3600;
}

function milesWithoutStop(fuelEconomy: number, tankCapacity: number): number {
  return tankCapacity * fuelEconomy;
}
