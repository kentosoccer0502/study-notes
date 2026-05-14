function upper10mpsList(pointsData: string[]): number[] {
  return pointsData.map((x) => splitAndCalcSpeed(x)).filter((x) => x >= 10);
}

function calcSpeed(x1: number, x2: number, t: number): number {
  return Math.floor(Math.abs(x1 - x2) / t);
}

function splitAndCalcSpeed(str: string): number {
  const splitted: string[] = str.split('-');
  return calcSpeed(Number(splitted[0]), Number(splitted[1]), Number(splitted[2]));
}
