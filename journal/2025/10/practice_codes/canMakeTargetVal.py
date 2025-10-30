from typing import List


def canMakeTargetVal(arr: List[int], target: int) -> bool:
    sum: int = None
    for i in range(len(arr)):
        for j in range(len(arr)):
            if i != j:
                sum = arr[i] + arr[j]
                if sum == target:
                    return True
