class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def linkedListLastValue(head: SinglyLinkedListNode) -> int:
    current_node = head
    while current_node.next is not None:
        current_node = current_node.next

    return current_node.data
