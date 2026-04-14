from typing import List
import math


class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def sortedArrToBST(numberList: List[int]) -> BinaryTree | None:
    """
    異なる整数値で構成されるソート済みのリストnumberListが与えられるので
    平衡二分探索木を作成し、その根ノードを返す関数

    Args:
      numberList(List[int]): ソート済みのリスト

    Returns:
      BinaryTree: 根ノード
    """
    if len(numberList) == 0:
        return None

    return sortedArrToBSTHelper(numberList, 0, len(numberList) - 1)


def sortedArrToBSTHelper(arr: List[int], start: int, end: int) -> BinaryTree:
    """
    与えられた配列をバランスの取れた二分探索木に変換するヘルパー関数

    Args:
      arr(List[int]): 配列
      start(int): 開始位置
      end(int): 終了位置

    Returns:
      BinaryTree
    """
    if start == end:
        return BinaryTree(arr[start], None, None)

    mid = math.floor((start + end) / 2)

    left = None
    if mid - 1 >= start:
        left = sortedArrToBSTHelper(arr, start, mid - 1)

    right = None
    if end >= mid + 1:
        right = sortedArrToBSTHelper(arr, mid + 1, end)

    root = BinaryTree(arr[mid], left, right)
    return root
