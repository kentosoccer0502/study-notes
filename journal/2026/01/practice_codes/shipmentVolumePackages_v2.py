from typing import List
import heapq


def shipmentVolumePackages(packages: List[int]) -> int:
    if len(packages) <= 1:
        return 0

    heapq.heapify(packages)  # O(n)
    total = 0

    while len(packages) > 1:
        a = heapq.heappop(packages)  # 最小
        b = heapq.heappop(packages)  # 次に小さい
        s = a + b

        total += s
        heapq.heappush(packages, s)

    return total
