from typing import List


class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def sortedArrToBST(numberList: List[int]) -> BinaryTree:
    return helper(numberList, 0, len(numberList) - 1, depth=0)


def helper(arr: List[int], start, end, depth) -> BinaryTree:
    indent = "  " * depth  # ネストの深さでインデント

    print(f"{indent}call: helper({start}, {end})")

    if start > end:
        print(f"{indent}return: None")
        return None

    mid = (start + end) // 2
    print(f"{indent}mid = {mid}, value = {arr[mid]}")

    left = helper(arr, start, mid - 1, depth + 1)
    right = helper(arr, mid + 1, end, depth + 1)

    node = BinaryTree(arr[mid], left, right)

    print(f"{indent}return: Node({node.data})")
    return node


balancedBST = sortedArrToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

# 生成されたバランスの取れた二分探索木の根ノード（balancedBST）を表示します。
print(balancedBST.data)
