function maxBread(money: number, price: number, sticker: number): number {
  let enableBuyBreads = Math.floor(money / price);
  let leftSticker = enableBuyBreads;
  return helper(leftSticker, sticker, enableBuyBreads);
}

function helper(
  leftSticker: number,
  sticker: number,
  enableBuyBreads: number
): number {
  if (leftSticker < sticker) return enableBuyBreads;
  let buyBySticker = Math.floor(leftSticker / sticker);
  enableBuyBreads += buyBySticker;
  leftSticker = buyBySticker + (leftSticker % sticker);
  return helper(leftSticker, sticker, enableBuyBreads);
}
