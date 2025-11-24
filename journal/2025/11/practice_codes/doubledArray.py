# 整数で構成される配列 arr が与えられるので、配列の各要素を 2 倍にして返す
#  doubledArray という関数を分割統治法を用いて実装

import math


def doubledArray(arr):
    return doubledArrayHelper(arr, 0, len(arr) - 1)


def doubledArrayHelper(arr, start, end):
    if start == end:
        return [arr[start] * 2]

    mid = math.floor((start + end) / 2)
    leftArr = doubledArrayHelper(arr, start, mid)
    rightArr = doubledArrayHelper(arr, mid + 1, end)

    return leftArr + rightArr


print(doubledArray([1, 2, 3, 4, 5]))  # [2, 4, 6, 8, 10]
