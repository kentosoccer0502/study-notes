import math


def allNPrimesSieve_verbose(n):
    cache = [True] * n
    print(f"初期状態: {list(range(n))}")
    print(f"cache: {cache}\n")

    if n == 2:
        return [2]
    if n == 3:
        return [2, 3]

    for currentPrime in range(2, math.ceil(math.sqrt(n))):
        # すでにFalseならスキップ
        if not cache[currentPrime]:
            continue

        print(
            f"=== {currentPrime} は素数なので、{currentPrime} の倍数を消していきます ==="
        )

        i = 2
        ip = i * currentPrime
        while ip < n:
            cache[ip] = False
            print(f"→ {ip} を消す")
            i += 1
            ip = i * currentPrime

        print(f"今の状態: {[i for i, v in enumerate(cache) if v and i >= 2]}\n")

    primeNumbers = [
        index for index, predicate in enumerate(cache) if predicate and index >= 2
    ]

    print(f"最終的に残った数: {primeNumbers}")
    return primeNumbers


# 実行してみる
print(allNPrimesSieve_verbose(2))
print(allNPrimesSieve_verbose(3))
print(allNPrimesSieve_verbose(30))


import math


def allNPrimesSieve_optimized_verbose(n):
    cache = [True] * n
    print("\n============= 最適化バージョン ============\n")
    print(f"初期状態: {list(range(n))}")
    print(f"cache: {cache}\n")

    for currentPrime in range(2, math.ceil(math.sqrt(n))):
        if not cache[currentPrime]:
            continue

        print(
            f"=== {currentPrime} は素数なので、{currentPrime} の倍数を {currentPrime ** 2} から消していきます ==="
        )

        # ✅ currentPrime² から倍数を消していく
        for ip in range(currentPrime * currentPrime, n, currentPrime):
            cache[ip] = False
            print(f"→ {ip} を消す")

        print(f"今の状態: {[i for i, v in enumerate(cache) if v and i >= 2]}\n")

    primes = [i for i in range(2, n) if cache[i]]
    print(f"最終的に残った数: {primes}")
    return primes


# 実行例
# allNPrimesSieve_optimized_verbose(30)


# ## 🎯 目的

# 「**2 から n の中で素数だけを見つけたい！**」

# たとえば、`n = 30` の場合
# 👇
# 2, 3, 4, 5, 6, 7, 8, 9, 10, ..., 30
# の中で
# ✅ **2, 3, 5, 7, 11, 13, 17, 19, 23, 29**
# だけが素数。

# ---

# ## 🧮 ステップ 1：ぜんぶ「まだ消されてない」として並べる

# 最初に、30 までの数をぜんぶ「True（＝候補）」にしておく。

# | 数字  | 状態   |
# | --- | ---- |
# | 0   | True |
# | 1   | True |
# | 2   | True |
# | 3   | True |
# | 4   | True |
# | 5   | True |
# | 6   | True |
# | ... | ...  |
# | 30  | True |

# > この時点では「全部素数かもしれない」と思ってる。

# ---

# ## 🧩 ステップ 2：2 から始めて、倍数を消す！

# 1️⃣ 最初の素数は **2**。
# → 2 は残す（✅）
# → でもその倍数（4, 6, 8, 10, 12, ...）は素数じゃないから消す。

# | 数字  | 状態  |
# | --- | --- |
# | 2   | ✅   |
# | 3   | ✅   |
# | 4   | ❌   |
# | 5   | ✅   |
# | 6   | ❌   |
# | 7   | ✅   |
# | 8   | ❌   |
# | 9   | ✅   |
# | 10  | ❌   |
# | ... | ... |

# ---

# ## 🧩 ステップ 3：次の残ってる数（3）に進む

# 次は **3**。
# → 3 はまだTrue（つまり消されてない）から「素数確定」。
# → 3 の倍数（6, 9, 12, 15, 18, ...）を全部 ❌ にする。

# | 数字  | 状態  |
# | --- | --- |
# | 2   | ✅   |
# | 3   | ✅   |
# | 4   | ❌   |
# | 5   | ✅   |
# | 6   | ❌   |
# | 7   | ✅   |
# | 8   | ❌   |
# | 9   | ❌   |
# | 10  | ❌   |
# | 12  | ❌   |
# | 15  | ❌   |
# | 18  | ❌   |
# | ... | ... |

# ---

# ## 🧩 ステップ 4：次は 4 → でももう消されてる（False）のでスキップ！

# 次の数 **4** は ❌ なので飛ばす。
# 次の **5** は True → 素数確定。
# → 5 の倍数（10, 15, 20, 25, 30, ...）を消す。

# ---

# ## 🧩 ステップ 5：7, 11, 13, … と同じように進む

# 残ってる数（Trueのもの）は素数。
# それぞれの倍数をどんどんFalse（❌）にしていく。

# 最終的に残るのは：

# ✅ **2, 3, 5, 7, 11, 13, 17, 19, 23, 29**

# ---

# ## 💡 なぜ √n までしか調べないの？

# これがポイント。

# たとえば 30 の場合：

# * √30 ≒ 5.47
#   だから **2, 3, 4, 5** まで見れば十分。

# 理由は：

# > 合成数は、必ず「小さい数 × 大きい数」でできている。

# 例：

# * 30 = 2 × 15
# * 30 = 3 × 10
# * 30 = 5 × 6

# → この「小さい数」はどれも √30 以下（つまり 5.47 以下）だから、
# 5 まで確認すれば全部の合成数を消せる！

# ---

# ## 🧠 つまりこの関数は

# ```python
# for currentPrime in range(2, math.ceil(math.sqrt(n))):
# ```

# で
# 「2, 3, 4, 5」だけを調べて、
# それぞれの倍数をFalseにしてる。

# ---

# ## 📦 ステップまとめ

# | ステップ | 処理内容                       |
# | :--- | :------------------------- |
# | 1    | すべての数を「True（まだ消してない）」にする   |
# | 2    | 2 の倍数を消す                   |
# | 3    | 3 の倍数を消す                   |
# | 4    | 4 は消えてるからスキップ              |
# | 5    | 5 の倍数を消す                   |
# | 6    | √n までやったら終了                |
# | 7    | 残ってる True の数だけを抽出（素数リスト完成） |

# ---

# ## 🔍 最後に

# ```python
# primeNumbers = [index for index, p in enumerate(cache) if p]
# return primeNumbers[2:]
# ```

# * `enumerate` で (インデックス, 値) をペアで取り出す
# * True のときのインデックスを集める
# * [0, 1] は素数じゃないので `[2:]` で除外！

# ---

# ## 🎨 ざっくり図（n=30 のイメージ）

# ```
# 2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
# ✔️ ✔️ ❌ ✔️ ❌ ✔️ ❌ ❌ ❌ ✔️ ❌ ✔️ ❌ ❌ ❌ ✔️ ❌ ✔️ ❌ ❌ ❌ ❌ ✔️ ❌ ❌ ❌ ❌ ❌ ✔️ ❌
# ```

# ---
