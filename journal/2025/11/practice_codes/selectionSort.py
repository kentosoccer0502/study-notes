from typing import List


def selectionSort(arr: List[int]) -> List[int]:
    n = len(arr)

    for i in range(n):
        minIndex = i
        for j in range(i + 1, n):
            if arr[j] <= arr[minIndex]:
                minIndex = j
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp

    return arr
