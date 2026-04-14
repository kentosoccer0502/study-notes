class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def predecessor(root: BinaryTree, key: int) -> BinaryTree | None:
    """
    異なる整数値で構成される二分探索木（BST）の根ノードrootとBST内に存在する整数keyが与えられるので
    根ノードが先行ノードである部分木を返す関数

    Args:
      root(BinaryTree) : 二分探索木
      key(int) : BST内に存在する整数

    Returns:
      BinaryTree: 先行ノードの部分木（存在しない場合はNull）
    """
    predecessor = None
    iterator = root

    while iterator is not None:
        if iterator.data == key:
            if iterator.left is not None:
                iterator = iterator.left
                while iterator.right is not None:
                    iterator = iterator.right
                return iterator
            return predecessor
        if iterator.data > key:
            iterator = iterator.left
        else:
            predecessor = iterator
            iterator = iterator.right

    return predecessor
