class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def sumOfThreeNodes(root: BinaryTree) -> int:
    if root is None:
        return 0

    left_val = root.left.data if root.left else 0
    right_val = root.right.data if root.right else 0

    return root.data + left_val + right_val
