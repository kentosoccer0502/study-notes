from typing import List


def shuffledPositions(arr: List[int], shuffledArr: List[int]):
    answer: List[int] = []
    for i in range(len(arr)):
        for j in range(len(shuffledArr)):
            if arr[i] == shuffledArr[j]:
                answer.append(j)

    return answer


from typing import List, Dict


def shuffledPositionsV2(arr: List[int], shuffledArr: List[int]):
    # shuffledArrの各要素のインデックスをハッシュマップに記録
    # ex) shuffledArr = [45, 32 ,2] -> {45: 0, 32: 1, 2: 2}
    hashmap_shuffled: Dict[int, int] = {}
    for index, value in enumerate(shuffledArr):
        hashmap_shuffled[value] = index

    answer: List[int] = []
    for i in range(len(arr)):
        answer.append(hashmap_shuffled[arr[i]])

    return answer
