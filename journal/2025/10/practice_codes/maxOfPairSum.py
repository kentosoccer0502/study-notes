from typing import List


def maxOfPairSum(arr1: List[int], arr2: List[int], x: int) -> str:
    first_max: int = -999999999999999999
    max: int = first_max

    for i in range(len(arr1)):
        for j in range(len(arr2)):
            current_sum = arr1[i] + arr2[j]
            if current_sum < x and max < current_sum:
                max = current_sum
    if max == first_max:
        return "no pair"

    return max
