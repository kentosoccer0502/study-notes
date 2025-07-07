function intSquareRoot(n: number): number {
  return Math.floor(squareRootHelper(n, 1));
}

function squareRootHelper(x, guess) {
  // 新しい近似値は、2 つの近似値の平均から求めます
  let newGuess = (guess + x / guess) / 2;

  console.log("guess : " + guess.toString());
  console.log("newGuess : " + newGuess.toString());

  // 相対誤差が 0.01 未満であることがベースケースです
  if (isSquareRootCloseEnough(newGuess, guess)) return newGuess;

  // 再帰的に計算を繰り返します
  return squareRootHelper(x, newGuess);
}

// isSquareRootCloseEnough(a,b) は相対誤差を計算する関数です
// 相対誤差が 0.01% 未満であれば、true, 0.01％ 以上であれば false を返します
function isSquareRootCloseEnough(a, b) {
  // 誤差 |a-b| を計算するために、abs 関数を使います。abs(x) は x の絶対値を返します
  return 100 * Math.abs((a - b) / b) < 0.01;
}
