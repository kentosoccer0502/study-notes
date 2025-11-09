from typing import List, Dict


def twoSum(intArr: List[int], sumInt: int) -> List[int]:
    hash_map: Dict[int, int] = {}
    result: List[List[int]] = []  # ペアはリストで保持して List[int] を返す
    for i in range(len(intArr) - 1, -1, -1):
        complement = sumInt - intArr[i]
        if complement in hash_map:
            result.append([i, hash_map[complement]])
        else:
            hash_map[intArr[i]] = i
    # 最小のインデックスペアを返す（List[int] を返す）
    return min(result, key=lambda x: min(x)) if result else []


print(twoSum([1, 2, 3, 4], 5))
