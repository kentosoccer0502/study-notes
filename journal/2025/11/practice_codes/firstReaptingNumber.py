from typing import List, Dict


def firstRepeatingNumber(nums: List[int]) -> int:
    hash_map: Dict[str, int] = {}
    repeated_list: List[int] = []
    for i in range(len(nums)):
        if str(nums[i]) not in hash_map:
            hash_map[str(nums[i])] = 1
        else:
            hash_map[str(nums[i])] += 1
            repeated_list.append(nums[i])

    return sorted(set(repeated_list))[0] if repeated_list else -1
