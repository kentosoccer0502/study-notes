class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def predecessor(root: BinaryTree, key: int) -> BinaryTree | None:
    current = root
    pred = None

    while current:
        if key > current.data:
            pred = current
            current = current.right
        elif key < current.data:
            current = current.left
        else:
            # 左部分木がある場合
            if current.left:
                node = current.left
                while node.right:
                    node = node.right
                return node
            break

    return pred
