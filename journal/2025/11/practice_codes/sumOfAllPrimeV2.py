from typing import List
import math


def sumOfAllPrimes(n: int) -> int:
    prime_years: List[int] = prime_list(n)
    return sum(prime_years)


def prime_list(n: int) -> List[int]:
    cache = [True] * (n + 1)
    root = math.floor(math.sqrt(n))
    for candidate in range(2, root + 1):
        if not cache[candidate]:
            continue
        for multiple in range(candidate * 2, n + 1, candidate):
            cache[multiple] = False

    prime_numbers: List[int] = [
        index for index, is_prime in enumerate(cache) if is_prime
    ]
    return prime_numbers[2:]


sumOfAllPrimes(10)
