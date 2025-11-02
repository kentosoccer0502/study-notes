from typing import List
import math


def sumOfAllPrimes(n: int) -> int:
    answer = 0
    prime_years: List[int] = prime_list(n)
    for i in range(len(prime_years)):
        answer += prime_years[i]

    return answer


def prime_list(n: int) -> List[int]:
    cache = [True] * (n + 1)
    root = math.floor(math.sqrt(n))
    for currentPrime in range(2, root + 1):
        if not cache[currentPrime]:
            continue
        i = 2
        ip = i * currentPrime

        while ip <= n:
            cache[ip] = False
            i += 1
            ip = i * currentPrime

    prime_numbers: List[int] = []
    for index, predicate in enumerate(cache):
        if predicate:
            prime_numbers.append(index)

    return prime_numbers[2:]
