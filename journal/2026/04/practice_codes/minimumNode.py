class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def minimumNode(root: BinaryTree) -> BinaryTree:
    """
    異なる整数値で構成される二分探索木（BST）の根ノードrootが与えられるので
    BST内に存在する最小値を持つノードを返す関数

    Args:
      root: BinaryTree
    Returns:
      最小値を持つノード: BinaryTree
    """
    if root is None:
        return None
    iterator = root
    while iterator.left is not None:
        iterator = iterator.left

    return iterator
