from collections import deque
from typing import List


def minWindowArrK(intArr: List[int], k: int) -> List[int]:
    d = deque()
    results = []

    for i in range(k):
        while not len(d) == 0 and intArr[d[-1]] >= intArr[i]:
            d.pop()
        d.append(i)

    for i in range(k, len(intArr)):
        results.append(intArr[d[0]])
        while not len(d) == 0 and d[0] <= i - k:
            d.popleft()
        while not len(d) == 0 and intArr[d[-1]] >= intArr[i]:
            d.pop()
        d.append(i)
    results.append(intArr[d[0]])

    return results
