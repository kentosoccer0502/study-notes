class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def maximumNode(root: BinaryTree) -> BinaryTree:
    """
    異なる整数値で構成される二分探索木（BST）の根ノードrootが与えられるので
    BST内に存在する最大値を持つノードを返す関数

    Args:
      root(BinaryTree): BSTの根ノード

    Returns:
      BinaryTree: 最大値を持つノード
    """
    if root is None:
        return None

    current_node = root
    while current_node.right is not None:
        current_node = current_node.right

    return current_node
