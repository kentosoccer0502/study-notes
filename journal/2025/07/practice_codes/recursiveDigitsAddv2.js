function helper(digits, currentTotal, finalTotal) {
  if (digits < 10) {
    currentTotal = digits + currentTotal;
    if (currentTotal < 10) {
      return currentTotal + finalTotal;
    }
    return helper(currentTotal, 0, currentTotal + finalTotal);
  }
  return helper(
    Math.floor(digits / 10),
    (digits % 10) + currentTotal,
    finalTotal
  );
}

function recursiveDigitsAdded(digits) {
  return helper(digits, 0, 0);
}

// 3528
// helper(3528, 0, 0)
// helper(352, 0+8, 0)
// helper(35, 8+2, 0)
// helper(3, 10+5, 0)
// helper(3,15,18)
