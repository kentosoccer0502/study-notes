class BinaryTree:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right


def successor(root, key):
    # keyのノードを探し、変数targetNodeに代入します。
    targetNode = findNode(root, key)

    # keyがBST内に存在しない場合、Noneを返します。
    if targetNode == None:
        return None

    # targetNodeに右側の子がある場合は、その部分木の最小値を返します。
    if targetNode.right is not None:
        return minimumNode(targetNode.right)

    successor = None
    iterator = root
    # rootをiteratorに代入し、探索と同じ要領でtargetNodeがiteratorよりも小さい時には左へ、大きい時は右へ進みます。
    while iterator is not None:

        # ターゲットとiteratorのdataが同じだったら、その時のsuccessorを返します。
        if targetNode.data == iterator.data:
            return successor

        # 左側に進むときは、現在のiteratorが後続ノードである可能性があるのでsuccessorを更新します。
        if targetNode.data < iterator.data:
            successor = iterator
            iterator = iterator.left

        # 右側に進むときはsuccessorを更新する必要はありません。
        else:
            iterator = iterator.right

    return successor


# keyのノードを探す関数
def findNode(root, key):
    iterator = root

    while iterator is not None:
        if iterator.data == key:
            return iterator
        if iterator.data < key:
            iterator = iterator.right
        else:
            iterator = iterator.left

    return iterator


# 最小値を探す関数
def minimumNode(root):
    iterator = root
    while iterator is not None and iterator.left is not None:
        iterator = iterator.left
    return iterator
