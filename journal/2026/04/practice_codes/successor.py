class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def successor(root: BinaryTree, key: int) -> BinaryTree | None:
    """
    異なる整数値で構成される二分探索木（BST）の根ノードrootとBST内に存在する整数keyが与えれるので
    根ノードが後続ノードである部分木を返す関数
    👉 「keyより大きい値の中で最小のノードを探せ」

    Args:
      root(BinaryTree): BSTの根ノード
      key(int): BST内に存在する整数

    Returns:
      BinaryTree: keyの後続ノード
    """
    if root is None:
        return None

    successor_node = None  # 後続ノードの候補を格納する変数
    iterator = root
    while iterator is not None:
        if iterator.data == key:
            # もし右にノードがあれば右に入り、左に移動し続けて最小値を返す
            if iterator.right is not None:
                iterator = iterator.right
                while iterator.left is not None:
                    iterator = iterator.left
                return iterator
            # それ以外は後続ノードの候補を返す
            return successor_node
        if iterator.data < key:
            iterator = iterator.right
        else:
            successor_node = iterator  # 後続ノードの候補を入れておく
            iterator = iterator.left
    return successor_node
