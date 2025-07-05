const VALID_CREDIT_CARD_TYPE: Array<string> = ["Visa", "MasterCard"];
const TAX = 0.1;
const CREDIT_BALANCE = 300;

function processPayment(creditCardType: string, cost: number): number {
  if (!isCardValid(creditCardType)) {
    return -1;
  }
  const totalCost = cost * (1 + chipPayment(cost) + TAX);
  if (!checkCreditBalance(totalCost)) {
    return -1;
  }
  return totalCost;
}

function isCardValid(creditCardType: string): boolean {
  return VALID_CREDIT_CARD_TYPE.includes(creditCardType);
}

function chipPayment(cost: number): number {
  if (cost % 3 === 0) {
    return 0.03;
  } else if (cost % 5 === 0) {
    return 0.05;
  } else if (cost % 7 === 0) {
    return 0.07;
  } else {
    return 0.1;
  }
}

function checkCreditBalance(totalCost: number): boolean {
  return totalCost < CREDIT_BALANCE;
}
