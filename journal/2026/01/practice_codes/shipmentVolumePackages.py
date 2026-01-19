from typing import List


def shipmentVolumePackages(packages: List[int]) -> int:
    if len(packages) <= 1:
        return 0

    sum = 0
    while len(packages) > 1:
        packages.sort()  # --------------------------> O(n log n)なので微妙　-> ヒープを使うべし
        a = packages.pop(0) + packages.pop(0)
        sum += a
        packages.insert(0, a)

    return sum
