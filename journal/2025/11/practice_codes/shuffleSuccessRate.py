from typing import List, Dict
import math


def shuffleSuccessRate(arr: List[int], shuffledArr: List[int]) -> int:
    # shuffledArrのインデックスと値を持つハッシュマップ
    hashmap_shuffled_arr: Dict[int, int] = {}
    for index, value in enumerate(shuffledArr):
        hashmap_shuffled_arr[value] = index

    moved_count: int = 0
    for i in range(len(arr)):
        print(hashmap_shuffled_arr[arr[i]], arr[i])
        if hashmap_shuffled_arr[arr[i]] != i:
            moved_count += 1
    return math.floor((moved_count / len(arr)) * 100)
