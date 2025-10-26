from typing import List


def rotateByTimes(ids: List[int], n: int) -> List[int]:
    n = n % len(ids)
    return ids[-n:] + ids[:-n]


from typing import List
import math


#
# 別解
#
def reverseInPlace(arr: List[int], start: int, end: int) -> List[int]:
    middle = math.floor((start + end) / 2)
    for i in range(start, middle + 1):
        opposite = start + (end - i)  # 0 +
        arr[i], arr[opposite] = arr[opposite], arr[i]
    return arr


def rotateByTimesWithReverse(ids: List[int], n: int) -> List[int]:
    """
    reverseアルゴリズム
    - 時間計算量O(N)
    - 空間計算量O(1)
    """
    n = n % len(ids)
    reverseInPlace(ids, 0, len(ids) - 1)
    reverseInPlace(ids, 0, n - 1)
    reverseInPlace(ids, n, len(ids) - 1)
    return ids
