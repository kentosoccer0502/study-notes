from typing import List


def diceStreakGamble(
    player1: List[int], player2: List[int], player3: List[int], player4: List[int]
) -> str:
    stack = [
        createIncreaseStack(player1),
        createIncreaseStack(player2),
        createIncreaseStack(player3),
        createIncreaseStack(player4),
    ]
    max_index = max(range(len(stack)), key=lambda i: len(stack[i]))
    rolled = ",".join(map(str, stack[max_index]))

    return f"Winner: Player {max_index + 1} won ${str(len(stack[max_index]) * 4)} by rolling [{rolled}]"


def createIncreaseStack(arr: List[int]) -> List[int]:
    stack = []
    stack.append(arr[0])
    for i in arr[1:]:
        if i >= stack[-1]:
            stack.append(i)
        else:
            stack = [i]
    return stack
