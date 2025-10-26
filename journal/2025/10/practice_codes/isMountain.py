from typing import List


def isMountain(height: List[int]) -> bool:
    if len(height) <= 2:
        return False
    max_height = max(height)
    max_height_index = height.index(max_height)
    if max_height_index + 1 == len(height) or max_height_index == 0:
        return False

    for i in range(0, max_height_index):
        if height[i] < height[i + 1]:
            continue
        else:
            return False
    for i in range(max_height_index, len(height) - 1):
        if height[i] > height[i + 1]:
            continue
        else:
            return False
    return True
