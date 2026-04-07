class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def bstSearch(root: BinaryTree, key: int) -> BinaryTree | None:
    """
    二分探索木（BST）の根ノード root と整数 keyを受け取り、keyと等しい部分木の根ノードを返す関数

    Args:
        root (BinaryTree): BSTの根ノード
        key (int): キー

    Returns:
        BinaryTree: 部分木のノード
    """
    iterator = root
    while iterator is not None:
        if iterator.data == key:
            return iterator
        if iterator.data < key:
            iterator = iterator.right
        else:
            iterator = iterator.left

    return None
