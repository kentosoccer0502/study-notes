from typing import List
import math


def primesUpToNCount(n: int) -> int:
    return len(prime_list(n))


def prime_list(n: int) -> List[int]:
    cache = [True] * n
    root = math.floor(math.sqrt(n))

    for i in range(2, root + 1):
        if not cache[i]:
            continue
        for j in range(i * 2, n, i):
            cache[j] = False

    prime_numbers: List[int] = [index for index, value in enumerate(cache) if value]
    return prime_numbers[2:]  # 0,1は素数ではないため除外


print(primesUpToNCount(10))
