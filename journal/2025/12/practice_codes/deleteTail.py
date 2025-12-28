class SinglyLinkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None


def deleteTail(head: SinglyLinkedListNode) -> SinglyLinkedListNode:
    if head is None or head.next is None:
        return None

    current_node = head
    while current_node.next.next is not None:
        current_node = current_node.next
    current_node.next = None

    return head
