function maxBread(money: number, price: number, sticker: number): number {
  let enableBuy = Math.floor(money / price);
  let leftSticker = enableBuy;
  while (leftSticker >= sticker) {
    let buyBySticker = Math.floor(leftSticker / sticker);
    enableBuy += buyBySticker;
    leftSticker = buyBySticker + (leftSticker % sticker);
  }
  return enableBuy;
}

/*
mB(10,2,3)
enableBuy = 10/2 = 5
leftSticker = 5 >= 3
buyBySticker = 5/3 = 1
enableBuy = 5 + 1 = 6
leftSticker = 1 + 2 = 3 >=3
buyBySticker = 3/3 = 1
enableBuy = 6 + 1 = 7
leftSticker = 1 + 0 = 1 < 3
*/
