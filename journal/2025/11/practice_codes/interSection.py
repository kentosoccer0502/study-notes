# 挿入ソート
# 計算量: 最悪O(n^2)
#   ランキングシステムでよく使われる
#    -> 新しいスコアが来たときに、既存の昇順にソート済みのランキングに挿入するのに便利


def insertionSort(arr):
    n = len(arr)

    for i in range(n):
        currentValue = arr[i]
        for j in range(i - 1, -1, -1):
            if currentValue < arr[j]:
                arr[j + 1] = arr[j]
                arr[j] = currentValue
            else:
                break
    return arr
