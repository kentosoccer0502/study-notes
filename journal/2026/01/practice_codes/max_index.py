# これと同じ処理を関数で
# max_index = max(range(len(players)), key=lambda i: len(players[i]))
# [[1,2,3], [2,2], [1,2,3,4,5], [1]] -> 2


from typing import List


def get_max_index(arr: List[List[int]]) -> int:
    max_index = 0
    max_length = 0

    for i, player in enumerate(arr):
        if len(player) > max_length:
            max_length = len(player)
            max_index = i
    return max_index


print(get_max_index([[1, 2, 3], [2, 2], [1, 2, 3, 4, 5], [1]]))
