from typing import List, Dict


def intersectionOfArraysRepeats(intList1: List[int], intList2: List[int]) -> List[int]:
    hashmap: Dict[int, int] = {}
    for i in range(len(intList1)):
        if intList1[i] in hashmap:
            hashmap[intList1[i]] += 1
        else:
            hashmap[intList1[i]] = 1

    result: List[int] = []
    for j in range(len(intList2)):
        if intList2[j] in hashmap:
            hashmap[intList2[j]] -= 1
            if hashmap[intList2[j]] >= 0:
                result.append(intList2[j])

    return sorted(result)


print(intersectionOfArraysRepeats([3, 2, 2, 2, 1, 10, 10], [3, 2, 10, 10, 10]))
