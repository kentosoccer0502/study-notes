from typing import List, Dict


def findPairs(numbers: List[int]) -> List[int]:
    hash_map: Dict[int, int] = {}
    for i in range(len(numbers)):
        if numbers[i] not in hash_map:
            hash_map[numbers[i]] = 1
        else:
            hash_map[numbers[i]] += 1
    keys: List[int] = [k for k, v in hash_map.items() if v == 2]

    return sorted(keys)
