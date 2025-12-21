class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def linkedListLength(head: SinglyLinkedListNode) -> int:
    current_node = head
    count = 0
    while current_node is not None:
        count += 1
        current_node = current_node.next

    return count
