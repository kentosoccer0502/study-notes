import math


def sumOfArray(arr):
    return sumOfArrayHelper(arr, 0, len(arr) - 1)


def sumOfArrayHelper(arr, start, end):
    if start == end:
        return arr[start]

    mid = math.floor((start + end) / 2)
    leftArr = sumOfArrayHelper(arr, start, mid)
    rightArr = sumOfArrayHelper(arr, mid + 1, end)

    return leftArr + rightArr


print(sumOfArray([1, 2, 3, 4, 5]))  # 15
