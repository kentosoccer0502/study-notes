from typing import List


def hasPenalty(records: List[int]) -> bool:
    current_max = records[0]
    for i in range(0, len(records) - 1):
        if records[i] <= records[i + 1]:
            current_max = records[i + 1]
            continue
        if current_max >= records[i + 1]:
            return True

    return False
