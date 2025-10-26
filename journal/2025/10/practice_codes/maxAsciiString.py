from typing import List


def maxAsciiString(stringList: List[str]) -> int:
    sum_list: List[int] = []
    for item in stringList:
        item_sum = 0
        for string in item:
            item_sum += ord(string)
        sum_list.append(item_sum)
    return sum_list.index(max(sum_list))
