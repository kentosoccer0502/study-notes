from typing import List, Dict, Tuple


def twoSum(intArr: List[int], sumInt: int) -> List[int]:
    hash_map: Dict[int, int] = {}
    pairs: List[Tuple[int, int]] = []
    for i in range(len(intArr) - 1, -1, -1):
        if sumInt - intArr[i] in hash_map:
            pairs.append((i, hash_map[sumInt - intArr[i]]))
        else:
            hash_map[intArr[i]] = i
    if not pairs:
        return []
    # convert the chosen tuple to a list to match the declared return type
    return list(min(pairs, key=lambda x: min(x)))


print(twoSum([1, 2, 3, 4], 5))
