import math


class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        # 左の二分木
        self.left = left
        # 右の二分木
        self.right = right


def sortedArrayToBSTHelper(arr, start, end):
    if start == end:
        return BinaryTree(arr[start], None, None)

    mid = math.floor((start + end) / 2)

    left = None
    if mid - 1 >= start:
        left = sortedArrayToBSTHelper(arr, start, mid - 1)

    right = None
    if mid + 1 <= end:
        right = sortedArrayToBSTHelper(arr, mid + 1, end)

    root = BinaryTree(arr[mid], left, right)
    return root


def sortedArrayToBST(nums):
    if len(nums) == 0:
        return None
    return sortedArrayToBSTHelper(nums, 0, len(nums) - 1)


# BSTリストの中にキーが存在かどうかによって、true、falseを返します。
# 再帰
def keyExist(key, bst):
    if bst == None:
        return False
    if bst.data == key:
        return True

    # 現在のノードよりキーが小さければ左に、大きければ右に辿ります。
    if bst.data > key:
        return keyExist(key, bst.left)
    else:
        return keyExist(key, bst.right)


balancedBST = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
print(keyExist(6, balancedBST))
print(keyExist(10, balancedBST))
print(keyExist(45, balancedBST))
