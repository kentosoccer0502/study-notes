from typing import List, Dict


def listIntersection(targetList: List[int], searchList: List[int]) -> List[int]:
    # targetListをキャッシュするハッシュマップ
    hashmap_target: Dict[int, int] = {}
    for i in range(len(targetList)):
        hashmap_target[targetList[i]] = targetList[i]

    result: List[int] = []
    for j in range(len(searchList)):
        if searchList[j] in hashmap_target:
            result.append(searchList[j])

    return sorted(set(result))
