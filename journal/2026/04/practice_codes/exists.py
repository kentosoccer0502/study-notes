class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def exists(root: BinaryTree, key: int) -> bool:
    """
    異なる整数値で構成される二分探索木（BST）の根ノード root と整数 key を受け取り、keyがBSTの中に存在するかどうかを判定する関数

    Args:
        root(BinaryTree): 二分探索木（BST）の根ノード
        key(int): キー

    Returns:
        bool: 真偽値
    """
    iterator = root
    while iterator is not None:
        if iterator.data == key:
            return True
        if iterator.data < key:
            iterator = iterator.right
        else:
            iterator = iterator.left

    return False
