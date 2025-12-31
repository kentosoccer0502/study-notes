class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def linkedListSearch(head: SinglyLinkedListNode, data: int) -> int:
    current_node = head
    index = 0

    while current_node is not None:
        if current_node.data == data:
            return index
        index += 1
        current_node = current_node.next

    return -1
