from typing import List, Dict


def searchList(numList: List[int], value: int) -> int:
    hash_map: Dict[str, int] = {}

    for i in range(len(numList)):
        hash_map[str(numList[i])] = i

    answer = hash_map.get(str(value))

    return -1 if answer is None else answer
