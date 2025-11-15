from typing import Dict, List


def firstNonRepeating(s: str) -> int:
    # キーを問題、値を出現回数とした辞書
    hash_map: Dict[str, int] = {}
    for word in s:
        if word not in hash_map:
            hash_map[word] = 1
        else:
            hash_map[word] += 1
    keys: List[str] = [k for k, v in hash_map.items() if v == 1]
    return s.index(keys[0]) if keys else -1


from typing import Dict, List


def firstNonRepeatingV2(s: str) -> int:
    hash_map: Dict[str, int] = {}
    for char in s:
        if char not in hash_map:
            hash_map[char] = 1
        else:
            hash_map[char] += 1
    for i in range(len(s)):
        if hash_map[s[i]] == 1:
            return i

    return -1
