from typing import List


def merge(leftArr: List[int], rightArr: List[int]) -> List[int]:
    result = []
    i = j = 0

    # 比較段階
    while i < len(leftArr) and j < len(rightArr):
        if leftArr[i] <= rightArr[j]:
            result.append(leftArr[i])
            i += 1
        else:
            result.append(rightArr[j])
            j += 1

    # 残りを追加
    while i < len(leftArr):
        result.append(leftArr[i])
        i += 1

    while j < len(rightArr):
        result.append(rightArr[j])
        j += 1

    return result
