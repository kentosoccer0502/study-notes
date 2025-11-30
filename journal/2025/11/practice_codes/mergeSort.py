from typing import List


def mergeSort(arr: List[int]) -> List[int]:
    if len(arr) <= 1:
        return arr

    center = len(arr) // 2
    left = mergeSort(arr[:center])
    right = mergeSort(arr[center:])

    l_i = r_i = k = 0
    while len(right) > r_i and len(left) > l_i:
        if left[l_i] <= right[r_i]:
            arr[k] = left[l_i]
            l_i += 1
        else:
            arr[k] = right[r_i]
            r_i += 1
        k += 1

    while len(left) > l_i:
        arr[k] = left[l_i]
        l_i += 1
        k += 1
    while len(right) > r_i:
        arr[k] = right[r_i]
        r_i += 1
        k += 1

    return arr


print(mergeSort([38, 27, 43, 3, 9, 82, 10]))
