from typing import Dict, Set


def hasSameType(user1: str, user2: str) -> bool:
    if len(user1) != len(user2):
        return False

    hash_map: Dict[str, str] = {}
    for i in range(len(user1)):
        if user1[i] not in hash_map:
            hash_map[user1[i]] = user2[i]
        if hash_map[user1[i]] != user2[i]:
            return False

    value_check: Set[str] = set()
    for i in hash_map.values():
        if i in value_check:
            return False
        value_check.add(i)

    return True


# キーと値が同じ時 -> true, それ以外はfalse
# {a:y, b:z} -> false
# {a:b, p:t, l:e} -> true
# {a:b, p:t, l:b} -> false
