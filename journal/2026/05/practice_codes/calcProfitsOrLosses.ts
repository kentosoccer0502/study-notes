function calcProfitsOrLosses(stockList: string[]): number {
  return stockList.reduce((total, stock) => calcProfit(stock) + total, 0);
}

function calcProfit(stock: string): number {
  const [prevStock, quantity, currentStock] = stock.split('-').map(Number);
  return (currentStock - prevStock) * quantity;
}
