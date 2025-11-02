from typing import List
import math


def sumOfAllPrimes(n: int) -> int:
    answer = 0
    prime_years: List[int] = prime_list(n)
    # 追加: 素数一覧を表示してから合計を計算
    print(f"見つかった素数: {prime_years}")
    for i in range(len(prime_years)):
        answer += prime_years[i]

    print(f"素数の合計: {answer}")
    return answer


def prime_list(n: int) -> List[int]:
    cache = [True] * (n + 1)
    root = math.floor(math.sqrt(n))
    # 追加: 入力とルートの表示
    print(f"prime_list を呼び出しました: n={n}, sqrt(n)={root}")
    # 追加: 最初の状態の簡易表示（長い場合は先頭だけ）
    if n <= 30:
        print(f"初期 cache (index: is_prime): {list(enumerate(cache))}")
    else:
        print(
            f"初期 cache の長さ: {len(cache)} (先頭 10 件): {list(enumerate(cache[:10]))} ..."
        )

    for currentPrime in range(2, root + 1):
        # 追加: 現在の素数候補を表示
        print(f"現在の currentPrime = {currentPrime}")
        if not cache[currentPrime]:
            # 追加: スキップ理由を表示
            print(f"  {currentPrime} は既に合成数にマークされているためスキップします")
            continue
        i = 2
        ip = i * currentPrime

        while ip <= n:
            # 追加: マークする倍数を表示（既に False ならその旨表示）
            if cache[ip]:
                print(f"  {ip} を合成数(False)にマークします")
            else:
                print(f"  {ip} は既に合成数です")
            cache[ip] = False
            i += 1
            ip = i * currentPrime

    prime_numbers: List[int] = []
    for index, predicate in enumerate(cache):
        if predicate:
            prime_numbers.append(index)

    # 追加: 2 以上の素数のみを表示して返す
    primes_to_return = prime_numbers[2:]
    print(f"見つかった素数(2以上): {primes_to_return}")
    return primes_to_return


# 実行例
sumOfAllPrimes(10)
