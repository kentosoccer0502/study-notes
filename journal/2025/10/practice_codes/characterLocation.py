from typing import List, Dict

command_rule: Dict[str, List[int]] = {
    "N": [0, 1],
    "E": [1, 0],
    "W": [-1, 0],
    "S": [0, -1],
}


def characterLocation(commands: str) -> List[int]:
    current_loc: List[int] = [0, 0]
    for c in commands:
        if c in command_rule:
            move = command_rule[c]
            current_loc[0] += move[0]
            current_loc[1] += move[1]
    return current_loc
