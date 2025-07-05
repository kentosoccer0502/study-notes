const STATE_TAX: { [key: string]: number } = {
  AZ: 0.049,
  CA: 0.0884,
  TX: 0,
  NC: 0.025,
  Other: 0.05,
};

const FEDERAL_TAX = 0.21;

function calculateCorporationTax(
  state: string,
  year: number,
  profit: number
): number {
  return Math.ceil(profit * totalTax(state, year));
}

function isLeapYear(year: number): boolean {
  // 4で割り切れないか
  if (year % 4 !== 0) {
    return false;
  }
  // 100で割り切れるか
  if (year % 100 === 0) {
    // 400で割り切れないか
    if (year % 400 !== 0) {
      return false;
    }
  }
  return true;
}

function totalTax(state: string, year: number): number {
  const checkIsLeapYear = isLeapYear(year);
  if (!checkIsLeapYear) {
    return FEDERAL_TAX + stateTax(state);
  }
  return stateTax(state);
}

function stateTax(state: string): number {
  return state in STATE_TAX ? STATE_TAX[state] : STATE_TAX["Other"];
}
