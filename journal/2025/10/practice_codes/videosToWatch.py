from typing import List


def videosToWatch(time: List[int], dailyGoal: int) -> int:
    sum_time: int = 0
    for i in range(len(time)):
        sum_time += time[i]
        if sum_time >= dailyGoal:
            return i + 1
    return -1
