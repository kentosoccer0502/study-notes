from typing import List, Dict


def missingItems(listA: List[int], listB: List[int]) -> List[int]:
    # listBのインデックスを持つハッシュマップ作成
    hashmap_list_b: Dict[int, int] = {}
    for i in range(len(listB)):
        hashmap_list_b[listB[i]] = i

    result: List[int] = []
    for j in range(len(listA)):
        if listA[j] not in hashmap_list_b:
            result.append(listA[j])

    return result if result else listA
