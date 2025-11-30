from typing import List


def mergeSort(arr: List[int]) -> List[int]:
    if len(arr) <= 1:
        return arr

    center = len(arr) // 2
    left = mergeSort(arr[:center])
    right = mergeSort(arr[center:])

    left_i = right_i = arr_i = 0
    while left_i < len(left) and right_i < len(right):
        if left[left_i] <= right[right_i]:
            arr[arr_i] = left[left_i]
            left_i += 1
        else:
            arr[arr_i] = right[right_i]
            right_i += 1
        arr_i += 1

    while left_i < len(left):
        arr[arr_i] = left[left_i]
        arr_i += 1
        left_i += 1
    while right_i < len(right):
        arr[arr_i] = right[right_i]
        arr_i += 1
        right_i += 1

    return arr


print(mergeSort([38, 27, 43, 3, 9, 82, 10]))
