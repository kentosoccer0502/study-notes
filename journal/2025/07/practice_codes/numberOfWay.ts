function numberOfWay(x: number): number {
  if (x == 1) {
    return 1;
  } else if (x == 2) {
    return 2;
  }
  return numberOfWay(x - 2) + numberOfWay(x - 1);
}

// x = 3
// 1 + 1 + 1
// 1 + 2
// 2 + 1
//
// x = 6
// 4に2を加える場合と5に1を加える2つの場合しかない
// n(6) = n(4) + n(5)
