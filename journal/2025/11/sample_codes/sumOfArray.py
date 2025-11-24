import math


def sumOfArray(arr):
    if not arr:
        print("sumOfArray: empty array -> 0")
        return 0
    return sumOfArrayHelper(arr, 0, len(arr) - 1, 0)


def sumOfArrayHelper(arr, start, end, depth):
    indent = "  " * depth
    print(f"{indent}sumOfArrayHelper(start={start}, end={end})")

    if start == end:
        print(f"{indent}  base case: arr[{start}] = {arr[start]}")
        return arr[start]

    mid = (start + end) // 2
    print(f"{indent}  mid = {mid}")

    leftVal = sumOfArrayHelper(arr, start, mid, depth + 1)
    print(f"{indent}  left result = {leftVal}")

    rightVal = sumOfArrayHelper(arr, mid + 1, end, depth + 1)
    print(f"{indent}  right result = {rightVal}")

    total = leftVal + rightVal
    print(f"{indent}  returning {total} for range [{start}, {end}]")
    return total


print(sumOfArray([1, 2, 3, 4, 5]))  # 15


# sumOfArrayHelper(start=0, end=4)
#   mid = 2
#   sumOfArrayHelper(start=0, end=2)
#     mid = 1
#     sumOfArrayHelper(start=0, end=1)
#       mid = 0
#       sumOfArrayHelper(start=0, end=0)
#         base case: arr[0] = 1
#       left result = 1
#       sumOfArrayHelper(start=1, end=1)
#         base case: arr[1] = 2
#       right result = 2
#       returning 3 for range [0, 1]
#     left result = 3
#     sumOfArrayHelper(start=2, end=2)
#       base case: arr[2] = 3
#     right result = 3
#     returning 6 for range [0, 2]
#   left result = 6
#   sumOfArrayHelper(start=3, end=4)
#     mid = 3
#     sumOfArrayHelper(start=3, end=3)
#       base case: arr[3] = 4
#     left result = 4
#     sumOfArrayHelper(start=4, end=4)
#       base case: arr[4] = 5
#     right result = 5
#     returning 9 for range [3, 4]
#   right result = 9
#   returning 15 for range [0, 4]
# 15
