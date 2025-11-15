from typing import List, Dict, Set


def findXTimes(teams: str) -> bool:
    hashmap: Dict[str, int] = {}
    for team in teams:
        if not team in hashmap:
            hashmap[team] = 1
        else:
            hashmap[team] += 1

    values_set: Set[int] = set(hashmap.values())

    return True if len(values_set) == 1 else False


def findXTimesV2(teams: str) -> bool:
    hashmap: Dict[str, int] = {}
    for team in teams:
        hashmap[team] = hashmap.get(team, 0) + 1
    values_set: Set[int] = set(hashmap.values())

    return len(values_set) == 1


print(findXTimes("AABBCC"))
print(findXTimesV2("AABBCC"))
