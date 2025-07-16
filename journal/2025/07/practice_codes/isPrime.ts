function isPrime(number: number): boolean {
  if (number == 1) return false;
  if (number <= 3) return true;
  let divideBy = 2;
  while (number > divideBy) {
    if (number % divideBy == 0) return false;
    divideBy++;
  }
  return true;
}

/**
 * 素数判定ロジック
 *
 * 素数の条件
 * - 1 と自分自身以外に約数（割り切れる数）がない
 */
