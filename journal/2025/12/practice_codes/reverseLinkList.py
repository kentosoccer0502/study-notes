class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def reverseLinkedList(head):
    current_node = head
    reversed_head = None

    # リストを逆向きにするために、各ノードのポインタを反転させる
    while current_node is not None:
        next_node = current_node.next  # 次のノードを保存
        current_node.next = reversed_head  # 現在のノードの次を逆向きリストの先頭に設定
        reversed_head = current_node  # 逆向きリストの先頭を更新
        current_node = next_node  # 次のノードに進む

    return reversed_head
